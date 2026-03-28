"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      await fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // Buttondown returns opaque response with no-cors, so we treat it as success
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-6 rounded-lg bg-primary/10 px-6 py-4 text-center">
        <p className="font-semibold text-primary">Thank you!</p>
        <p className="mt-1 text-sm text-on-surface-variant">
          Check your inbox to confirm your subscription.
        </p>
      </div>
    );
  }

  return (
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/saaspedia"
      method="post"
      onSubmit={handleSubmit}
      className="mt-6"
    >
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          required
          aria-label="Email address"
          className="w-full rounded-lg border border-outline-variant/20 bg-surface-container-highest px-4 py-3 text-sm text-on-surface placeholder:text-outline outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary sm:max-w-xs"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="primary-gradient w-full rounded-lg px-6 py-3 text-sm font-semibold text-surface-container-lowest transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
        >
          {status === "submitting" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="mt-3 text-center text-xs text-outline">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
