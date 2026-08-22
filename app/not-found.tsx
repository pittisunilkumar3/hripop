import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="nf-code">404</p>
      <h1>
        This experience <em>doesn’t exist yet.</em>
      </h1>
      <p className="nf-body">
        The page you were looking for hasn’t been imagined into reality. But that’s
        kind of our specialty.
      </p>
      <div className="nf-actions">
        <Link className="cta-primary" href="/">
          Back to the beginning <ArrowUpRight size={16} />
        </Link>
        <Link className="cta-ghost" href="/contact">
          Imagine something new
        </Link>
      </div>
    </main>
  );
}
