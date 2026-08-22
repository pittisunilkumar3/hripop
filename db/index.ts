import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

type WorkersEnv = { env: Record<string, unknown> };

let envPromise: Promise<WorkersEnv> | null = null;

/**
 * Lazily import the Workers runtime env module. `cloudflare:workers` only
 * resolves inside workerd (dev via the Cloudflare Vite plugin, or production
 * on Cloudflare). In plain Node contexts (local `vinext start`, tests) the
 * import throws and callers can degrade gracefully.
 */
async function loadWorkersEnv(): Promise<WorkersEnv> {
  if (!envPromise) {
    envPromise = import("cloudflare:workers").then(
      (mod) => mod as unknown as WorkersEnv,
      () => {
        envPromise = null;
        throw new Error(
          "Cloudflare D1 binding `DB` is unavailable in this runtime. The database is only reachable inside the Cloudflare Workers runtime.",
        );
      },
    );
  }
  return envPromise;
}

export async function getDb() {
  const { env } = await loadWorkersEnv();
  const binding = (env as { DB?: unknown }).DB;

  if (!binding) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database.",
    );
  }

  return drizzle(binding as Parameters<typeof drizzle>[0], { schema });
}
