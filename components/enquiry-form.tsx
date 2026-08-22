"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { BUDGET_RANGES, ENQUIRY_TYPES } from "../content/site";

type Mode = "experience" | "partner";

export default function EnquiryForm({ initialMode = "experience" }: { initialMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [submitting, setSubmitting] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(data.entries()), mode }),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }
      setComplete(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (complete) {
    return (
      <motion.div
        className="success-state"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div aria-hidden="true"><Check /></div>
        <span>A beautiful beginning</span>
        <h3>
          {mode === "partner"
            ? "Welcome to the HRIPOP ecosystem."
            : "Your imagination has taken its first step toward reality."}
        </h3>
        <p>
          {mode === "partner"
            ? "Thank you for offering your capability. We’ll be in touch as the right experiences come together."
            : "Thank you for starting the conversation with HRIPOP Media. We’ll reply to take it forward."}
        </p>
        <button
          type="button"
          onClick={() => {
            setComplete(false);
            setMode("experience");
          }}
        >
          Share another idea <ArrowRight size={16} />
        </button>
      </motion.div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <fieldset className="mode-switch">
        <legend>I’m here to…</legend>
        <div className="mode-options" role="tablist" aria-label="Enquiry type">
          <button
            type="button"
            role="tab"
            aria-selected={mode === "experience"}
            className={mode === "experience" ? "selected" : ""}
            onClick={() => setMode("experience")}
          >
            Submit an imagination
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "partner"}
            className={mode === "partner" ? "selected" : ""}
            onClick={() => setMode("partner")}
          >
            Join the ecosystem
          </button>
        </div>
      </fieldset>

      {mode === "experience" ? (
        <>
          <label>
            <span>What are you looking for?</span>
            <select name="enquiryType" defaultValue="Creative Industry Event" required>
              {ENQUIRY_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>
          <div className="field-row">
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
            </label>
            <label>
              <span>Organization</span>
              <input name="organization" type="text" placeholder="Company / studio / brand" autoComplete="organization" />
            </label>
          </div>
          <div className="field-row">
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@email.com" autoComplete="email" required />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="+91 …" autoComplete="tel" />
            </label>
          </div>
          <div className="field-row">
            <label>
              <span>Location</span>
              <input name="location" type="text" placeholder="City, country or destination" />
            </label>
            <label>
              <span>Expected audience / guests</span>
              <input name="audience" type="text" placeholder="e.g. 300 delegates, 80 guests" inputMode="text" />
            </label>
          </div>
          <div className="field-row">
            <label>
              <span>Date / timeline</span>
              <input name="timeline" type="text" placeholder="e.g. November 2026, flexible" />
            </label>
            <label>
              <span>Budget range</span>
              <select name="budget" defaultValue={BUDGET_RANGES[4]}>
                {BUDGET_RANGES.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            <span>Tell us your idea</span>
            <textarea
              name="idea"
              rows={4}
              placeholder={
                mode === "partner"
                  ? "Tell us what you imagine…"
                  : "A summit that feels like a festival. A wedding that feels like a journey. Something we can't describe yet…"
              }
              required
            />
          </label>
          <label>
            <span>Brief link <i>(optional)</i></span>
            <input name="briefUrl" type="url" placeholder="Link to your brief, deck or references" />
          </label>
        </>
      ) : (
        <>
          <label>
            <span>What capability do you bring?</span>
            <select name="enquiryType" defaultValue="Event Production">
              {[
                "Event Production",
                "Studio / Production House",
                "Creative Agency",
                "Artist / Performer",
                "Speaker",
                "Creator",
                "Technology Company",
                "AI Company",
                "Hotel / Resort",
                "Travel Partner",
                "Digital / PR Agency",
                "Media House",
                "Educational Institution",
                "Government Organization",
                "Industry Association",
                "Vendor / Consultant",
                "Other",
              ].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>
          <div className="field-row">
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
            </label>
            <label>
              <span>Organization</span>
              <input name="organization" type="text" placeholder="Company / studio" autoComplete="organization" required />
            </label>
          </div>
          <div className="field-row">
            <label>
              <span>Email</span>
              <input name="email" type="email" placeholder="you@email.com" autoComplete="email" required />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="+91 …" autoComplete="tel" />
            </label>
          </div>
          <label>
            <span>Location</span>
            <input name="location" type="text" placeholder="City, country" />
          </label>
          <label>
            <span>Tell us about your capability</span>
            <textarea
              name="idea"
              rows={4}
              placeholder="What you do, who you've worked with, and what you'd love to build with HRIPOP…"
              required
            />
          </label>
        </>
      )}

      {error && <p className="form-error" role="alert">{error}</p>}

      <button className="submit-button" type="submit" disabled={submitting}>
        {submitting ? "Sending…" : mode === "partner" ? "Join the HRIPOP ecosystem" : "Submit your imagination"}
        <span aria-hidden="true"><Sparkles size={16} /></span>
      </button>
      <p className="form-footnote">
        Your details stay with HRIPOP Media — used only to reply to your enquiry.
      </p>
    </form>
  );
}
