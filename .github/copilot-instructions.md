<!-- Copilot / AI assistant instructions for the neoclassical Hugo theme -->
# Copilot Instructions — neoclassical theme

Purpose
-------
These instructions bootstrap how AI assistants and contributors should work in this repository.
Keep guidance concise, actionable, and focused on producing accessible, maintainable site HTML/CSS.

Core principles
---------------
- Semantic markup first: prefer semantic HTML elements (article, header, nav, main, section, footer, figure, figcaption, etc.).
- Minimal JavaScript: use vanilla JS only for progressive enhancement. Avoid client-side frameworks (React, Vue, Svelte, etc.).
- No JS framework: do not introduce runtime dependencies for JS frameworks. Build-time utilities are allowed if justified.
- WCAG 2.1 compliance: prioritize accessibility (keyboard focus, ARIA only when necessary, sufficient color contrast, form labels, skip links).
- Keep templates and partials small, readable, and reusable.
- Use Hugo's new template system introduced in 0.146.0. https://gohugo.io/templates/new-templatesystem-overview/

What the assistant should do
---------------------------
- When generating templates or components, output semantic HTML and accessible defaults (labels, roles, alt text placeholders).
- Prefer server-rendered approaches (Hugo templates) over client-side rendering.
- If JavaScript is required, keep it minimal, unobtrusive, and feature-detect. Include comments explaining why it exists and how to test it.
- Add accessibility notes and a short testing checklist in pull request descriptions when the change affects UI or UX.

Accessibility checklist (apply to UI changes)
---------------------------------------------
- Landmarks and headings: include appropriate headings and landmark elements for screen reader navigation.
- Keyboard: all interactive elements reachable/focusable and usable without a mouse.
- Focus styles: clearly visible focus indicators (do not rely solely on outline: none).
- Color contrast: meet WCAG 2.1 AA contrast ratios for text and UI components.
- Images: provide meaningful `alt` text; decorative images should use empty `alt=""` and role/presentational patterns.
- Forms: every input must have an associated label; error states announced/visible.
- ARIA: use only when native HTML cannot provide the semantics; prefer native controls.

JavaScript policy
-----------------
- Use only modern, lightweight vanilla JS (ES6+). Keep scripts small and purposeful.
- Avoid bundlers or adding npm dependencies for UI features unless absolutely necessary and documented.
- Progressive enhancement: pages must be fully usable without JavaScript.
- Prefer `defer` scripts and avoid blocking rendering.

Files & locations to inspect first
---------------------------------
- Templates: layouts/
- Partials: layouts/_partials/
- Assets (CSS): assets/css/
- Shortcodes: layouts/_shortcodes/
- Static resources: static/

Testing & validation
--------------------
- Use W3C HTML validator and Lighthouse/axe for accessibility checks.
- For color contrast use automated tools and manual verification.

Example prompts (copyable)
---------------------------
- "Create an accessible article list partial using semantic HTML and WCAG 2.1 AA contrast—no JS." 
- "Add a keyboard-accessible skip link to the site header and ensure it is visible on focus." 
- "Improve the article template: use `figure`/`figcaption` for cover images and include alt text placeholder." 
- "Add a minimal vanilla JS toggle for table-of-contents visibility with ARIA-expanded and keyboard support." 

Next agent customizations to consider
------------------------------------
- `create-instruction:accessibility` — focused checklist for visual components and patterns.
- `create-prompt:templates` — a set of standard prompts for generating Hugo partials and shortcodes.

Contribution notes for humans
-----------------------------
- When opening PRs, include how you tested accessibility and any Lighthouse/axe results.
- Keep PRs focused and small when possible.

If something is unclear
-----------------------
Ask for clarification in the PR or open an issue describing the desired UX and constraints.
