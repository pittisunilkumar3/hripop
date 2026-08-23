import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Sparkles } from "lucide-react";
import FadeUp from "./FadeUp";
import SectionHeading from "./section-heading";
import { BRAND, CONTACT } from "../content";

const inputClass =
  "w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-light text-white placeholder:text-white/35 outline-none backdrop-blur-sm transition-colors focus:border-white/40";

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
    <section id="contact" className="relative scroll-mt-24 border-t border-white/10 bg-white/[0.02] py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-5 sm:px-6">
        <SectionHeading
          eyebrow={CONTACT.eyebrow}
          title={CONTACT.title}
          lead={CONTACT.punch}
        />

        <FadeUp delay={0.3}>
          <p className="mt-6 text-center text-sm font-light text-white/50 sm:text-base">
            {CONTACT.lead} It could be an event, summit, concert, film launch, roadshow, destination
            wedding, business gathering, publicity campaign, image transformation — or something you
            don’t even know how to describe yet.
          </p>
        </FadeUp>

        <FadeUp delay={0.45}>
          <div className="relative mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:mt-16 sm:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <Check className="h-6 w-6 text-white" />
                  </span>
                  <h3 className="mt-6 text-xl font-medium tracking-tight text-white">
                    Your imagination is on its way.
                  </h3>
                  <p className="mt-3 max-w-sm text-sm font-light text-white/50">
                    Your email app should have opened with everything pre-filled. If it didn’t,
                    send it directly:
                  </p>
                  <a
                    href={mailto}
                    className="mt-5 break-all text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                  >
                    {BRAND.email}
                  </a>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/80 transition-all hover:border-white/30 hover:text-white"
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
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="name" type="text" placeholder="Your name" autoComplete="name" required className={inputClass} />
                    <input name="email" type="email" placeholder="you@email.com" autoComplete="email" required className={inputClass} />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="organization" type="text" placeholder="Company / studio / brand (optional)" autoComplete="organization" className={inputClass} />
                    <div className="relative">
                      <select name="type" defaultValue={CONTACT.types[0]} className={`${inputClass} appearance-none pr-11`} aria-label="What are you looking for?">
                        {CONTACT.types.map((type) => (
                          <option key={type} value={type} className="bg-[#0b0b10] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="location" type="text" placeholder="City, country or destination" className={inputClass} />
                    <input name="timeline" type="text" placeholder="e.g. November 2026, flexible" className={inputClass} />
                  </div>
                  <textarea
                    name="idea"
                    placeholder="Tell us your idea — don’t worry if it doesn’t fit a category yet."
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                  />
                  <button
                    type="submit"
                    className="btn-glow flex w-full items-center justify-center gap-2.5 rounded-full bg-slate-950 py-3.5 pl-8 pr-4 text-sm font-medium text-white transition-transform hover:scale-[1.02] active:scale-100 sm:w-auto sm:text-base"
                  >
                    {CONTACT.cta}
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
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
