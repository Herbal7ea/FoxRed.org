import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 2 * 60 * 1000; // 2 minutes
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

// In-memory store for rate limiting (IP -> last submission timestamp)
const submissionTimes = new Map<string, number>();

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

function cleanupOldEntries() {
  const now = Date.now();
  for (const [ip, timestamp] of submissionTimes.entries()) {
    if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
      submissionTimes.delete(ip);
    }
  }
}

export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);

  // Clean up old entries periodically
  cleanupOldEntries();

  // Check rate limit
  const lastSubmission = submissionTimes.get(clientIP);
  if (lastSubmission) {
    const timeSinceLastSubmission = Date.now() - lastSubmission;
    if (timeSinceLastSubmission < RATE_LIMIT_WINDOW_MS) {
      const remainingSeconds = Math.ceil(
        (RATE_LIMIT_WINDOW_MS - timeSinceLastSubmission) / 1000
      );
      return NextResponse.json(
        {
          success: false,
          message: `Please wait ${remainingSeconds} seconds before sending another message.`,
        },
        { status: 429 }
      );
    }
  }

  try {
    const formData = await request.formData();

    // Convert FormData to JSON object for reliable server-to-server forwarding
    const jsonData: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        jsonData[key] = value;
      }
    }

    // Forward to Web3Forms as JSON
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(jsonData),
    });

    const data = await response.json();

    if (data.success) {
      // Record successful submission time
      submissionTimes.set(clientIP, Date.now());
    }

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}
