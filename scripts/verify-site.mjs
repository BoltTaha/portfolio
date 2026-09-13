import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
const base = process.argv[2] ?? "http://127.0.0.1:3000";
const canonicalBase = "https://muhammadtaha.app";
const normalizeUrl = (value) => new URL(value).href;
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => match[1],
);
assert.equal(
  urls.length,
  15,
  "Expected homepage, about, contact, project index, two client cases, and nine curated project cases",
);
const titles = new Set();
const documents = new Map();
for (const url of urls) {
  const path = new URL(url).pathname;
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const doc = new JSDOM(await response.text()).window.document;
  assert.equal(
    doc.querySelectorAll("h1").length,
    1,
    `${path}: one main heading`,
  );
  assert.equal(
    normalizeUrl(doc.querySelector('link[rel="canonical"]')?.href),
    normalizeUrl(url),
    `${path}: canonical`,
  );
  assert.ok(
    doc.querySelector('meta[name="description"]')?.content,
    `${path}: description`,
  );
  assert.ok(!titles.has(doc.title), `${path}: unique title`);
  titles.add(doc.title);
  assert.ok(
    !doc.querySelector('meta[name="robots"]')?.content.includes("noindex"),
    path,
  );
  const ids = [...doc.querySelectorAll("[id]")].map((el) => el.id);
  assert.equal(ids.length, new Set(ids).size, `${path}: unique IDs`);
  for (const script of doc.querySelectorAll(
    'script[type="application/ld+json"]',
  )) {
    const schema = JSON.parse(script.textContent);
    assert.equal(schema["@context"], "https://schema.org");
  }
  for (const key of ["og:title", "og:description", "og:image"])
    assert.ok(
      doc.querySelector(`meta[property="${key}"]`)?.content,
      `${path}: ${key}`,
    );
  assert.equal(
    normalizeUrl(doc.querySelector('meta[property="og:url"]')?.content),
    normalizeUrl(canonicalBase + (path === "/" ? "/" : path)),
  );
  documents.set(path, doc);
  console.log(`PASS ${path}: status, headings, metadata, JSON-LD, unique IDs`);
}
for (const [path, doc] of documents) {
  for (const anchor of doc.querySelectorAll("a[href]")) {
    const href = anchor.getAttribute("href");
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href, canonicalBase + path);
    if (url.pathname === "/resume.pdf") {
      const response = await fetch(base + url.pathname);
      assert.equal(response.status, 200, `${path}: internal link ${href}`);
      assert.ok(
        response.headers.get("content-type")?.includes("application/pdf"),
        `${path}: resume content type`,
      );
      continue;
    }
    const target = documents.get(url.pathname);
    assert.ok(target, `${path}: internal link ${href}`);
    if (url.hash)
      assert.ok(
        target.getElementById(decodeURIComponent(url.hash.slice(1))),
        `${path}: anchor ${href}`,
      );
  }
}
const missing = await fetch(`${base}/projects/does-not-exist`);
assert.equal(missing.status, 404);
assert.equal((await fetch(`${base}/does-not-exist`)).status, 404);
assert.equal((await fetch(`${base}/profile.jpeg`)).status, 200);
const resume = await fetch(`${base}/resume.pdf`);
assert.equal(resume.status, 200);
assert.ok(resume.headers.get("content-type")?.includes("application/pdf"));
const social = await fetch(`${base}/opengraph-image`);
assert.equal(social.status, 200);
assert.ok(social.headers.get("content-type").includes("image/png"));
const robots = await (await fetch(`${base}/robots.txt`)).text();
assert.ok(robots.includes("Allow: /"));
assert.ok(robots.includes(`${canonicalBase}/sitemap.xml`));
const llms = await (await fetch(`${base}/llms.txt`)).text();
for (const url of urls.filter((url) => url.includes("/projects/")))
  assert.ok(llms.includes(url));
for (const url of urls.filter((url) => url.includes("/client-work/")))
  assert.ok(llms.includes(url));
console.log(
  "PASS all internal links and anchors, 404 responses, resume PDF, portrait, social image, robots, llms.txt",
);
