import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the HRIPOP editorial experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /You imagine it\./);
  assert.match(html, /We build the/);
  assert.match(html, /Five worlds\. One philosophy\./);
  assert.match(html, /Cinematica Expo/);
  assert.match(html, /The HRIPOP Experience/);
  assert.match(html, /Submit your imagination/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("preserves the brand system, project proof and accessible motion controls", async () => {
  const [page, css, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
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
    assert.match(page, new RegExp(project));
  }

  assert.match(page, /role="tablist"/);
  assert.match(page, /aria-selected=/);
  assert.match(page, /preload="metadata"/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(layout, /You Imagine It\. We Build the Experience\./);
});
