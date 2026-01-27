"use client";

import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--brand-accent)] p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">Contact Us</h1>

        <ContactForm variant="light" />

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-[var(--brand-accent)] hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
