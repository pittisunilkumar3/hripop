import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function html(path) {
  const response = await render(path);
  assert.equal(response.status, 200, `${path} should return 200`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

const pages = [
  ["/", ["You imagine it.", "Five worlds", "Cinematica Expo 2025", "The HRIPOP Experience", "Submit your imagination", "Where ideas"]],
  ["/creative-industries", ["Where ideas", "Animation", "Creative Hackathons", "industry platforms"]],
  ["/experiences", ["designed around you", "Business Matchmaking", "Summit curation", "Roadshows", "One unified experience"]],
  ["/destinations", ["part of the story", "Destination weddings", "Mehendi", "Arrival", "Memory"]],
  ["/media-talent", ["Every experience deserves", "Film Launches", "Talent management", "public conversation"]],
  ["/image-pr", ["Your image", "Personal Brand Strategy", "Public figure", "Be remembered"]],
  ["/work", ["Some events we don\u2019t just manage", "CINICATHON 2026", "Frames of Founders", "Experience timeline"]],
  ["/work/cinematica-expo-2025", ["Where cinema met the future", "HRIPOP\u2019s role", "brought into reality"]],
  ["/work/cinicathon-2026", ["launchpad for creative innovation", "Hybrid Filmmaking"]],
  ["/work/frames-of-founders-2026", ["entrepreneurship became storytelling", "Documentary"]],
  ["/work/cinematica-expo-2026", ["The next chapter is coming", "4th Edition"]],
  ["/ecosystem", ["never created alone", "creative network", "specialist ecosystems"]],
  ["/insights", ["in focus", "Creator Economy", "being written"]],
  ["/about", ["have to stay imagination", "Vision", "Curiosity", "entire experience"]],
  ["/contact", ["doesn\u2019t exist yet", "What are you looking for", "Destination Wedding", "Budget range", "Submit your imagination"]],
  ["/legal/privacy", ["Privacy Policy", "What we collect"]],
  ["/legal/terms", ["Terms", "plain language"]],
  ["/legal/disclaimer", ["Honest by", "verified project statistics"]],
];

test("server-renders every page with its key content", async () => {
  for (const [path, needles] of pages) {
    const body = await html(path);
    for (const needle of needles) {
      assert.match(body, new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${path} should contain “${needle}”`);
    }
  }
});

test("navigation and footer cover the master sitemap", async () => {
  const body = await html("/");
  for (const link of [
    "/creative-industries",
    "/experiences",
    "/destinations",
    "/media-talent",
    "/image-pr",
    "/work",
    "/ecosystem",
    "/insights",
    "/about",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
    "/legal/disclaimer",
  ]) {
    assert.ok(body.includes(`href="${link}"`), `homepage HTML should link to ${link}`);
  }
  assert.match(body, /What we do/);
  assert.match(body, /All rights reserved/);
  assert.doesNotMatch(body, /Your site is taking shape|Building your site/);
});

test("case studies use the HRIPOP format without invented metrics", async () => {
  const body = await readFile(new URL("../app/work/[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(body, /The idea/);
  assert.match(body, /HRIPOP\u2019s role/);
  assert.match(body, /Another idea/);
  const content = await readFile(new URL("../content/site.ts", import.meta.url), "utf8");
  assert.doesNotMatch(content, /delegates|attendees|footfall/i);
});

test("preserves the brand system and accessible motion controls", async () => {
  const [page, css, content] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../content/site.ts", import.meta.url), "utf8"),
  ]);

  for (const color of ["#0a0a0a", "#f0ede5", "#d9d4ca", "#ff5a36"]) {
    assert.match(css, new RegExp(color));
  }

  for (const project of [
    "Cinematica Expo",
    "CINICATHON",
    "Frames of Founders",
    "Cinica Creators Council Challenges",
  ]) {
    assert.match(content, new RegExp(project));
  }

  assert.match(page, /role="tablist"/);
  assert.match(page, /aria-selected=/);
  assert.match(page, /preload="metadata"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /:focus-visible/);
});

test("enquiry API validates input and responds to POST", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test-post", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const post = await worker.fetch(
    new Request("http://localhost/api/enquiries", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: "Tester", email: "bad", idea: "x" }),
    }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );

  assert.equal(post.status, 400);
  const result = await post.json();
  assert.match(result.error, /valid email/i);
});

test("unknown routes return the branded 404", async () => {
  const response = await render("/does-not-exist");
  assert.equal(response.status, 404);
  const body = await response.text();
  assert.match(body, /doesn\u2019t exist yet/);
});
