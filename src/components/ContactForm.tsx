"use client";

import { useState, useEffect } from "react";
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

interface ContactFormProps {
  variant?: "light" | "dark";
}

export function ContactForm({ variant = "light" }: ContactFormProps) {
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

  const isDark = variant === "dark";

  const inputStyles = isDark
    ? "bg-white/10 border-white/20 text-[var(--brand-accent-text)] placeholder:text-white/50 focus:border-white/40"
    : "";

  const labelStyles = isDark ? "text-[var(--brand-accent-text)]" : "";

  return (
    <>
      <Script
        src="https://web3forms.com/client/script.js"
        async
        defer
        onLoad={() => setHcaptchaLoaded(true)}
      />

      {status === "success" ? (
        <div className="text-center">
          <p className={`mb-4 ${isDark ? "text-green-300" : "text-green-600"}`}>
            Thank you! Your message has been sent successfully.
          </p>
          <Button
            onClick={() => setStatus("idle")}
            className={isDark
              ? "bg-[var(--brand-accent-text)] text-[var(--brand-accent)] hover:bg-white"
              : "bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-pressed)] text-white"
            }
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
            <Label htmlFor="name" className={labelStyles}>Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className={inputStyles}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className={labelStyles}>Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className={inputStyles}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className={labelStyles}>Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              rows={5}
              className={inputStyles}
            />
          </div>

          {/* hCaptcha widget */}
          <div
            className="h-captcha"
            data-captcha="true"
            data-theme={isDark ? "dark" : "light"}
          />

          {status === "error" && (
            <p className={`text-sm ${isDark ? "text-red-300" : "text-red-600"}`}>{errorMessage}</p>
          )}

          <Button
            type="submit"
            disabled={status === "submitting" || !hcaptchaLoaded}
            className={`w-full ${isDark
              ? "bg-[var(--brand-accent-text)] text-[var(--brand-accent)] hover:bg-white"
              : "bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-pressed)] text-white"
            }`}
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </>
  );
}
