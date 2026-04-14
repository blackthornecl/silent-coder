#!/usr/bin/env node
// silent-coder — SessionStart activation hook
// Checks flag file ~/.claude/.silent-coder-active
// If present, injects code-only mode instructions into session context

const fs = require('fs');
const path = require('path');
const os = require('os');

const flagPath = path.join(os.homedir(), '.claude', '.silent-coder-active');

if (!fs.existsSync(flagPath)) {
  process.stdout.write('OK');
  process.exit(0);
}

process.stdout.write(`SILENT CODER MODE ACTIVE

Respond with ONLY code blocks. Zero prose. No intro, no outro, no explanation outside code.

## Rules

- Code request → code block only, nothing else
- Ambiguous request → best-guess code block
- Cannot answer in code → brief comment inside code block
- No "Here's the solution:", no "This code does...", no trailing summaries
- Off command: /silent-coder off

## Persistence

ACTIVE EVERY RESPONSE. No drift. No prose sneaks in. Persist until user says "stop silent" or "/silent-coder off".

## Boundaries

Questions about behavior: one-line answer max, then back to code-only.
`);
