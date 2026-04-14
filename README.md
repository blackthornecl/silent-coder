# silent-coder

A Claude Code plugin that activates code-only response mode. When active, Claude responds exclusively with code blocks — no prose, no explanations, no filler text.

## Install

```bash
claude plugin marketplace add blackthornecl/silent-coder
claude plugin install silent-coder@silent-coder
```

## Usage

| Command | Effect |
|---------|--------|
| `/silent-coder` | Activate code-only mode for this session |
| `/silent-coder off` | Deactivate, resume normal responses |

## Behavior when active

- Every response is a code block — nothing else
- No intro text, no trailing explanations
- Comments inside code are allowed when logic needs clarification
- Non-codeable questions answered as `# cannot answer in code`
- Persists across turns until explicitly disabled with `/silent-coder off` or "stop silent"

## Note

Mode is session-only. It does not persist across sessions.
