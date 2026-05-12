#!/usr/bin/env python3
"""
Antigravity WebForge — Agentic AI Website Builder
Architecture:
  1. Single API key (SARVAM_API_KEY)
  2. Sequential calls — each file saved immediately after generation
     Architecture → index.html → style.css → script.js
  3. Cleans all <think> tags and markdown fences from every response
"""

import asyncio
import os
import re
import sys
import httpx
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

# ── Config ────────────────────────────────────────────────────────────────────
API_URL     = "https://api.sarvam.ai/v1/chat/completions"
MODEL       = "sarvam-105b"
MAX_TOKENS  = 4096
TEMPERATURE = 0.3
OUTPUT_DIR  = "output"

# Single API key
API_KEY = os.getenv("SARVAM_API_KEY")

AGENT_PERSONA = (
    "You are Antigravity, an elite agentic AI web developer. "
    "Your goal is to build COOL, AMAZING, PREMIUM, and MODERN websites. "
    "Use rich aesthetics: vibrant color palettes, glassmorphism, smooth gradients, "
    "and modern typography. Never build a basic site. The user should be WOWED."
)

# ── Cleaners ──────────────────────────────────────────────────────────────────

def strip_think_tags(text: str) -> str:
    if not text:
        return ""
    text = re.sub(r"<think>.*?</think>",       "", text, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r"<thinking>.*?</thinking>", "", text, flags=re.DOTALL | re.IGNORECASE)
    text = re.sub(r"<<[^>]*>>",               "", text)
    return text.strip()


def clean_code(text: str, kind: str = "") -> str:
    text = strip_think_tags(text)
    text = re.sub(rf"^```{kind}\s*", "", text.strip(), flags=re.IGNORECASE | re.MULTILINE)
    text = re.sub(r"^```\s*",        "", text.strip(), flags=re.MULTILINE)
    text = re.sub(r"\s*```$",        "", text.strip(), flags=re.MULTILINE)
    return text.strip()


# ── File writer ───────────────────────────────────────────────────────────────

def save(content: str, path: str) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    kb = len(content.encode()) / 1024
    print(f"   💾  Saved: {path}  ({kb:.1f} KB)")


# ── Core API call ─────────────────────────────────────────────────────────────

async def call_api(system: str, user: str, label: str) -> str:
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type":  "application/json",
    }
    payload = {
        "model":       MODEL,
        "temperature": TEMPERATURE,
        "max_tokens":  MAX_TOKENS,
        "messages": [
            {"role": "system", "content": system},
            {"role": "user",   "content": user},
        ],
    }

    print(f"\n   → Generating {label} …")
    for attempt in range(4):
        try:
            async with httpx.AsyncClient(timeout=180.0) as client:
                r = await client.post(API_URL, headers=headers, json=payload)

            if r.status_code == 429:
                print(f"   ⏳ Rate limited — waiting 10s …")
                await asyncio.sleep(10)
                continue
            if r.status_code != 200:
                print(f"   ⚠️  API error {r.status_code}: {r.text[:200]}")
                await asyncio.sleep(5)
                continue

            raw = r.json()["choices"][0]["message"]["content"]
            cleaned = strip_think_tags(raw)
            print(f"   ✓  {label} received ({len(cleaned)} chars)")
            return cleaned

        except httpx.ConnectError as e:
            print(f"   ⚠️  Connection error: {e}")
            await asyncio.sleep(5)
        except Exception as e:
            print(f"   ⚠️  Error: {e}")
            await asyncio.sleep(5)

    print(f"   ❌  {label} failed after 4 attempts.")
    return ""


# ── Generators (each saves immediately after receiving response) ───────────────

async def generate_and_save_architecture(project_idea: str, out: str) -> str:
    system = AGENT_PERSONA + """

Write a DETAILED architecture document in Markdown with EXACTLY these sections.
Each section must be thorough — this document is the single source of truth for
building the HTML, CSS, and JS files.

## Project Overview
- What the website is, who it's for, what problem it solves
- Key goals and overall vibe/mood
- Page structure summary (sections in order)

## Color Scheme & Typography
- Exact hex codes for: background, primary, secondary, accent, text, muted text, borders
- Font choices: heading font + body font (Google Fonts or system stack)
- Font sizes for h1, h2, h3, p, small
- Spacing scale and any gradient definitions (exact CSS strings)

## HTML Structure
Detail EVERY section in order:
- **Header/Nav**: logo text, nav links (list all of them), hamburger on mobile, sticky/fixed
- **Hero**: exact headline, subheadline, CTA button text, background treatment
- **Each content section**: what it contains, element types, how many items, real content
- **Footer**: columns, content of each, copyright line
- All class names to use (must match CSS and JS exactly)

## CSS Specifications
- Layout: flexbox or grid for each section, column counts
- Card styles: border-radius, box-shadow, glassmorphism (backdrop-filter values)
- Button styles: primary + secondary, hover states
- Nav: desktop vs mobile layout, transition
- Animations: which elements, what kind, duration
- Breakpoints: exact px values and what changes

## JavaScript Functionality
- Mobile nav: which class to toggle, which element
- Scroll animations: which elements, IntersectionObserver threshold
- Smooth scroll behaviour
- Any counters, tabs, sliders — exact behaviour
- Form validation: fields, rules, feedback

## File Connections
- Exact <link> and <script> tags
- Complete list of class names shared between HTML and CSS
- Complete list of IDs used by JS querySelector

Rules:
- Minimum 600 words — be thorough and specific
- No code blocks — prose and bullet lists only
- Use REAL content (actual nav link names, headlines, product names — not Lorem Ipsum)
- Class names and IDs must be consistent everywhere
"""
    user = (
        f"Project: {project_idea}\n\n"
        "Write the full detailed architecture. Be specific — every design decision "
        "must be documented so the developer can build all three files without guessing."
    )
    result = await call_api(system, user, "Architecture")
    arch   = strip_think_tags(result)

    # Save immediately
    save(f"# Architecture — {project_idea}\n\n{arch}", f"{out}/ARCHITECTURE.md")
    return arch


async def generate_and_save_html(project_idea: str, arch: str, out: str) -> str:
    system = AGENT_PERSONA + """

Output ONLY valid HTML5. No explanations, no markdown fences, no <think> tags.

STRICT RULES:
- <link rel="stylesheet" href="style.css"> in <head>
- <script src="script.js" defer></script> before </body>
- Semantic tags: header, nav, main, section, footer
- Lowercase hyphenated class names that exactly match the architecture
- 150–220 lines, well-commented
- NO inline styles or inline scripts
- Real content — not Lorem Ipsum
"""
    user = (
        f"Project: {project_idea}\n\nArchitecture:\n{arch}\n\n"
        "Generate the complete index.html. Raw HTML only."
    )
    raw  = await call_api(system, user, "HTML")
    code = clean_code(raw, "html")

    # Save immediately
    save(code, f"{out}/index.html")
    return code


async def generate_and_save_css(project_idea: str, arch: str, out: str) -> str:
    system = AGENT_PERSONA + """

Output ONLY valid CSS. No explanations, no markdown fences, no <think> tags.

STRICT RULES:
- :root with CSS custom properties for ALL colors, fonts, spacing
- Mobile-first with @media (min-width: 768px) breakpoints
- Style EVERY element in the architecture
- Glassmorphism: backdrop-filter, semi-transparent backgrounds
- Smooth transitions (0.3s ease) on hover/focus
- 200–280 lines, well-commented
- NO external image URLs — use CSS gradients
"""
    user = (
        f"Project: {project_idea}\n\nArchitecture:\n{arch}\n\n"
        "Generate the complete style.css. Raw CSS only."
    )
    raw  = await call_api(system, user, "CSS")
    code = clean_code(raw, "css")

    # Save immediately
    save(code, f"{out}/style.css")
    return code


async def generate_and_save_js(project_idea: str, arch: str, out: str) -> str:
    system = AGENT_PERSONA + """

Output ONLY valid vanilla JavaScript. No explanations, no markdown fences, no <think> tags.

STRICT RULES:
- Vanilla JS only — zero libraries
- Wrap everything in DOMContentLoaded
- Mobile nav toggle
- Smooth scroll for anchor links
- Scroll-triggered fade-in (IntersectionObserver)
- Form validation if a form exists
- Under 140 lines, well-commented
"""
    user = (
        f"Project: {project_idea}\n\nArchitecture:\n{arch}\n\n"
        "Generate the complete script.js. Raw JavaScript only."
    )
    raw  = await call_api(system, user, "JavaScript")
    code = clean_code(raw, "javascript")

    # Save immediately
    save(code, f"{out}/script.js")
    return code


# ── Main ──────────────────────────────────────────────────────────────────────

async def main():
    print("\n" + "="*68)
    print("   🚀  Antigravity WebForge — Agentic AI Website Builder")
    print("   Mode: Single API key · Files saved as they generate")
    print("="*68 + "\n")

    if not API_KEY:
        print("❌  Missing env var: SARVAM_API_KEY")
        print("    Add it to your .env file:\n")
        print("    SARVAM_API_KEY=sk_xxxxxxxxxxxxxxxx\n")
        sys.exit(1)

    project_idea = input("What kind of amazing website do you want to build?\n>>> ").strip()
    if not project_idea:
        print("❌  No input. Exiting.")
        sys.exit(1)

    folder = re.sub(r"[^a-zA-Z0-9_-]", "_", project_idea[:40]).strip("_") or "my_site"
    out    = os.path.join(OUTPUT_DIR, folder)
    Path(out).mkdir(parents=True, exist_ok=True)

    print(f"\n   📁  Output folder: {out}/\n")

    # ── Sequential: each saved the moment it's ready ─────────────────────────

    print("[PHASE 1/4] Architecture blueprint …")
    arch = await generate_and_save_architecture(project_idea, out)

    print("\n[PHASE 2/4] HTML …")
    await generate_and_save_html(project_idea, arch, out)

    print("\n[PHASE 3/4] CSS …")
    await generate_and_save_css(project_idea, arch, out)

    print("\n[PHASE 4/4] JavaScript …")
    await generate_and_save_js(project_idea, arch, out)

    print(f"""
🎉  Done! Your website is ready:

    📁  {out}/
        ├── ARCHITECTURE.md   ← blueprint
        ├── index.html        ← structure
        ├── style.css         ← styling
        └── script.js         ← interactivity

    Open:  start {out}\\index.html
""")


if __name__ == "__main__":
    asyncio.run(main())