#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const ids = new Map();

function markdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(full);
    return entry.isFile() && entry.name.endsWith(".md") ? [full] : [];
  });
}

const maintained = [
  ...markdownFiles(path.join(root, "handbook")),
  ...markdownFiles(path.join(root, "decisions")).filter((file) => path.basename(file) !== "README.md")
];

for (const file of maintained) {
  const relative = path.relative(root, file);
  const content = fs.readFileSync(file, "utf8");
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    errors.push(`${relative}: missing metadata frontmatter`);
    continue;
  }
  const metadata = Object.fromEntries(match[1].split("\n").map((line) => {
    const separator = line.indexOf(":");
    return separator < 0 ? [line.trim(), ""] : [line.slice(0, separator).trim(), line.slice(separator + 1).trim()];
  }));
  for (const field of ["id", "title", "status", "owner", "applies_to", "last_verified"]) {
    if (!metadata[field]) errors.push(`${relative}: missing metadata field ${field}`);
  }
  if (metadata.id) {
    if (ids.has(metadata.id)) errors.push(`${relative}: duplicate id ${metadata.id} also used by ${ids.get(metadata.id)}`);
    ids.set(metadata.id, relative);
  }

  for (const link of content.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = link[1].split("#")[0];
    if (!target || /^(https?:|mailto:)/.test(target)) continue;
    if (!fs.existsSync(path.resolve(path.dirname(file), decodeURIComponent(target)))) {
      errors.push(`${relative}: broken local link ${link[1]}`);
    }
  }
}

const publicFiles = [
  ...markdownFiles(path.join(root, "handbook")),
  ...markdownFiles(path.join(root, "decisions")),
  path.join(root, "AGENTS.md"),
  path.join(root, "GRIDPOOL-PROJECT-BRAIN.md"),
  path.join(root, "GRIDPOOL-FULL-CORPUS.md")
].filter(fs.existsSync);

const forbidden = [
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, "private key"],
  [/\b(?:TELEGRAM_BOT_TOKEN|ADMIN_API_KEY|PRIVATE_KEY)\s*=\s*[^\s<][^\s]*/i, "credential assignment"],
  [/\b(?:10\.|192\.168\.|172\.(?:1[6-9]|2\d|3[01])\.)\d{1,3}\.\d{1,3}\b/, "private IPv4 address"]
];

for (const file of publicFiles) {
  const content = fs.readFileSync(file, "utf8");
  for (const [pattern, label] of forbidden) {
    if (pattern.test(content)) errors.push(`${path.relative(root, file)}: contains ${label}`);
  }
}

const agentLines = fs.readFileSync(path.join(root, "AGENTS.md"), "utf8").split("\n").length;
if (agentLines > 130) errors.push(`AGENTS.md is ${agentLines} lines; keep the always-loaded map under 130 lines`);

const generated = spawnSync(process.execPath, [path.join(root, "scripts/build-project-brain.mjs"), "--check"], {
  cwd: root,
  encoding: "utf8"
});
if (generated.status !== 0) errors.push(generated.stderr.trim() || generated.stdout.trim());

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(`Handbook checks passed: ${maintained.length} maintained documents, ${ids.size} unique IDs.`);
