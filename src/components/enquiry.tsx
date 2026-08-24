import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { BRAND, CONTACT } from "../content";

const inputClass =
  "enquiry-input";

export default function Enquiry() {
  const [sent, setSent] = useState(false);
  const [mailto, setMailto] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const organization = String(data.get("organization") ?? "").trim();
    const type = String(data.get("type") ?? "").trim();
    const location = String(data.get("location") ?? "").trim();
    const timeline = String(data.get("timeline") ?? "").trim();
    const idea = String(data.get("idea") ?? "").trim();

    const body = [
      `Name: ${name}`,
      organization && `Organization: ${organization}`,
      `Email: ${email}`,
      location && `Location: ${location}`,
      timeline && `Timeline: ${timeline}`,
      ``,
      `What we're looking for: ${type}`,
      ``,
      `The idea:`,
      idea,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:${BRAND.email}?subject=${encodeURIComponent(
      `New imagination — ${type} (${name})`,
    )}&body=${encodeURIComponent(body)}`;

    setMailto(href);
    setSent(true);
    window.location.href = href;
  };

  return (
    <section id="contact" className="section-shell enquiry-section">
      <div className="section-container enquiry-layout">
        <div className="enquiry-intro">
          <SectionHeading eyebrow={CONTACT.eyebrow} title={CONTACT.title} lead={CONTACT.punch} align="left" />

        <FadeUp delay={0.3}>
            <p className="enquiry-lead">
            {CONTACT.lead} It could be an event, summit, concert, film launch, roadshow, destination
            wedding, business gathering, publicity campaign, image transformation — or something you
            don’t even know how to describe yet.
          </p>
        </FadeUp>

          <div className="enquiry-signal" aria-hidden="true">
            <span>OPEN FOR IDEAS</span>
            <i />
            <small>INDIA / GLOBAL</small>
          </div>
        </div>

        <FadeUp delay={0.45}>
          <div className="enquiry-form-shell">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="enquiry-success"
                >
                  <span className="enquiry-success__icon">
                    <Check className="h-6 w-6 text-white" />
                  </span>
                  <h3>
                    Your imagination is on its way.
                  </h3>
                  <p>
                    Your email app should have opened with everything pre-filled. If it didn’t,
                    send it directly:
                  </p>
                  <a
                    href={mailto}
                    className="enquiry-success__email"
                  >
                    {BRAND.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="enquiry-success__reset"
                  >
                    Send another idea
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -12 }}
                  onSubmit={handleSubmit}
                  className="enquiry-form"
                >
                  <div className="enquiry-row">
                    <input name="name" type="text" placeholder="Your name" autoComplete="name" required className={inputClass} />
                    <input name="email" type="email" placeholder="you@email.com" autoComplete="email" required className={inputClass} />
                  </div>
                  <div className="enquiry-row">
                    <input name="organization" type="text" placeholder="Company / studio / brand (optional)" autoComplete="organization" className={inputClass} />
                    <div className="enquiry-select">
                      <select name="type" defaultValue={CONTACT.types[0]} className={`${inputClass} appearance-none pr-11`} aria-label="What are you looking for?">
                        {CONTACT.types.map((type) => (
                          <option key={type} value={type} className="bg-black text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown aria-hidden="true" />
                    </div>
                  </div>
                  <div className="enquiry-row">
                    <input name="location" type="text" placeholder="City, country or destination" className={inputClass} />
                    <input name="timeline" type="text" placeholder="e.g. November 2026, flexible" className={inputClass} />
                  </div>
                  <textarea
                    name="idea"
                    placeholder="Tell us your idea — don’t worry if it doesn’t fit a category yet."
                    rows={5}
                    required
                    className={inputClass}
                  />
                  <button
                    type="submit"
                    className="action-pill enquiry-submit"
                  >
                    {CONTACT.cta}
                    <Sparkles />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
