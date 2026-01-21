"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

declare global {
  interface Window {
    hcaptcha?: {
      reset: () => void;
    };
  }
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [hcaptchaLoaded, setHcaptchaLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.hcaptcha) {
      setHcaptchaLoaded(true);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
        if (window.hcaptcha) {
          window.hcaptcha.reset();
        }
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Failed to submit form. Please try again.");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#E34234] p-4">
      <Script
        src="https://web3forms.com/client/script.js"
        async
        defer
        onLoad={() => setHcaptchaLoaded(true)}
      />

      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Contact Us</h1>

        {status === "success" ? (
          <div className="text-center">
            <p className="mb-4 text-green-600">Thank you! Your message has been sent successfully.</p>
            <Button
              onClick={() => setStatus("idle")}
              className="bg-[#E34234] hover:bg-[#c73a2e]"
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="access_key" value="3be0227c-d882-4aea-96ed-3d6d2dbc5ba8" />

            {/* Honeypot field - hidden from users, catches bots */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                rows={5}
              />
            </div>

            {/* hCaptcha widget */}
            <div
              className="h-captcha"
              data-captcha="true"
            />

            {status === "error" && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            <Button
              type="submit"
              disabled={status === "submitting" || !hcaptchaLoaded}
              className="w-full bg-[#E34234] hover:bg-[#c73a2e]"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[#E34234] hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
