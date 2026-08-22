import { getDb } from "../../../db";
import { enquiries } from "../../../db/schema";

type Payload = Record<string, string | undefined>;

function clean(value: string | undefined, max = 2000): string {
  return (value ?? "").trim().slice(0, max);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function isSafeUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let payload: Payload;
  try {
    payload = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const mode = payload.mode === "partner" ? "partner" : "experience";
  const name = clean(payload.name, 160);
  const email = clean(payload.email, 200);
  const idea = clean(payload.idea, 4000);
  const enquiryType = clean(payload.enquiryType, 120) || "Other";
  const briefUrlRaw = clean(payload.briefUrl, 500);

  if (!name) {
    return Response.json({ error: "Please tell us your name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return Response.json({ error: "Please share a valid email so we can reply." }, { status: 400 });
  }
  if (idea.length < 10) {
    return Response.json({ error: "Tell us a little more about your idea." }, { status: 400 });
  }
  if (briefUrlRaw && !isSafeUrl(briefUrlRaw)) {
    return Response.json({ error: "The brief link must be a valid http(s) URL." }, { status: 400 });
  }

  const values = {
    mode,
    name,
    organization: clean(payload.organization, 200),
    email,
    phone: clean(payload.phone, 40),
    enquiryType,
    location: clean(payload.location, 200),
    audience: clean(payload.audience, 120),
    timeline: clean(payload.timeline, 120),
    budget: clean(payload.budget, 60),
    idea,
    briefUrl: briefUrlRaw,
  };

  try {
    const db = await getDb();
    await db.insert(enquiries).values(values);
    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    const setupPending =
      message.includes("no such table") ||
      message.includes('from "enquiries"') ||
      message.includes("unavailable") ||
      message.includes("binding");
    if (setupPending) {
      return Response.json(
        {
          error:
            "Our inbox is being set up — please email us directly and we'll reply right away.",
        },
        { status: 503 },
      );
    }
    console.error("Enquiry persistence failed:", message);
    return Response.json(
      { error: "Something interrupted the magic — please try again." },
      { status: 500 },
    );
  }
}
