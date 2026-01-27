import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[var(--brand-accent)] px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-md">
        <h2 className="mb-4 text-center text-3xl font-bold text-[var(--brand-accent-text)] md:text-4xl">
          Get in Touch
        </h2>
        <p className="mb-8 text-center text-[var(--brand-accent-text)]/80">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>
        <ContactForm variant="dark" />
      </div>
    </section>
  );
}
