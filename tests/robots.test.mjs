import assert from "node:assert/strict";
import test from "node:test";
import { readFile } from "node:fs/promises";

const robots = await readFile(new URL("../public/robots.txt", import.meta.url), "utf8");

// Parser REP intencionalmente pequeno: cobre os grupos explícitos deste arquivo.
function parseGroups(source) {
  return source
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter((block) => /^User-agent:/m.test(block))
    .map((block) => ({
      agents: [...block.matchAll(/^User-agent:\s*(.+)$/gm)].map((match) => match[1].trim()),
      allow: [...block.matchAll(/^Allow:\s*(.*)$/gm)].map((match) => match[1].trim()),
      disallow: [...block.matchAll(/^Disallow:\s*(.*)$/gm)].map((match) => match[1].trim()),
    }));
}

const groups = parseGroups(robots);
const groupFor = (agent) => groups.find((group) => group.agents.includes(agent));
const rulesFor = (agent) => groupFor(agent) ?? groupFor("*");

test("grupos conhecidos permitem rastreamento público e preservam somente o 404", () => {
  const knownAgents = [
    "OAI-SearchBot", "ChatGPT-User", "GPTBot",
    "Googlebot", "Google-Extended", "Bingbot",
    "Applebot", "Applebot-Extended",
    "ClaudeBot", "Claude-SearchBot", "Claude-User",
    "PerplexityBot", "Perplexity-User",
  ];

  assert.deepEqual(groupFor("*")?.allow, ["/"]);
  for (const agent of knownAgents) {
    assert.deepEqual(groupFor(agent)?.allow, ["/"], `${agent}: Allow público`);
    assert.deepEqual(groupFor(agent)?.disallow, ["/404.html"], `${agent}: exclusão única`);
  }
});

test("agente desconhecido usa o grupo curinga permissivo", () => {
  assert.deepEqual(rulesFor("Agente-Novo-Exemplo")?.allow, ["/"]);
  assert.deepEqual(rulesFor("Agente-Novo-Exemplo")?.disallow, ["/404.html"]);
});

test("robots mantém descoberta, comentários de escopo e não adiciona diretivas não validadas", () => {
  assert.match(robots, /rastre[a-zã]*mento público.*busca, respostas e treinamento/i);
  assert.match(robots, /não promete indexação ou citação/i);
  assert.match(robots, /^# Catalogo complementar: https:\/\/newtractor\.com\.br\/llms\.txt$/m);
  assert.match(robots, /^Sitemap: https:\/\/newtractor\.com\.br\/sitemap\.xml$/m);

  const disallows = groups.flatMap((group) => group.disallow);
  assert.deepEqual(new Set(disallows), new Set(["/404.html"]));
  assert.doesNotMatch(robots, /\\\*/);
  assert.doesNotMatch(robots, /^Disallow:\s*\/$/m);
  assert.doesNotMatch(robots, /ai-train\s*=\s*no/i);
  assert.doesNotMatch(robots, /Managed-/i);
});
