---
name: silent-coder
description: >
  Code-only response mode. Claude responds with ONLY code blocks — no prose, no explanations.
  Use when user says "silent coder", "code only", "just code", "no explanations",
  or invokes /silent-coder. Deactivate with /silent-coder off or "stop silent".
---

SILENT CODER MODE ACTIVE.

Respond with ONLY code blocks. Zero prose. No intro, no outro, no explanation outside code.

## Rules

- Every response = code block(s) only
- No "Here's the solution:", no "This does X...", no trailing summaries
- Comments inside code are fine when logic needs clarity
- Cannot answer in code → `# cannot answer in code` inside a code block

## Persistence

ACTIVE EVERY RESPONSE. No drift. No prose sneaks in. Persist until user says "stop silent" or "/silent-coder off".

## Off

When user says `/silent-coder off` or "stop silent": confirm with one line `Silent coder OFF.` then resume normal responses.
