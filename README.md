# 🚀 WebForge

> **AI-powered website builder** — type your idea, enter your shop details, get a complete modern website in minutes.

Built on top of **Sarvam AI (105B)**, WebForge generates a full architecture blueprint and then sequentially produces `index.html`, `style.css`, and `script.js` — saving each file the moment it's ready.

---

## ✨ Features

- 🧠 **AI-generated architecture** — detailed blueprint before a single line of code is written
- 🏪 **Shop-aware** — asks for your shop name, phone, email, and address; uses them as real content
- 💾 **Save-as-you-go** — each file is written to disk the moment the API responds
- 🎨 **Premium design** — glassmorphism, gradients, CSS custom properties, mobile-first responsive
- 🧹 **Auto-clean** — strips `<think>` tags and markdown fences from every API response
- 🔁 **Auto-retry** — 4 retries with rate-limit handling on every API call
- 🗂️ **Organized output** — each website gets its own folder under `output/`

---

## 📁 Project Structure

```
webForge/
├── build.py          ← main script (run this)
├── .env              ← your API key (create from .env.example)
├── .env.example      ← template
├── requirements.txt  ← dependencies
└── output/           ← generated websites land here
    └── Shop_Name/
        ├── ARCHITECTURE.md
        ├── index.html
        ├── style.css
        └── script.js
```

---

## ⚙️ Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/webForge.git
cd webforge
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Create your `.env` file

```bash
cp .env.example .env
```

Open `.env` and add your Sarvam API key:

```env
SARVAM_API_KEY=sk_xxxxxxxxxxxxxxxx
```

> Get your API key from [sarvam.ai](https://sarvam.ai)

---

## ▶️ Usage

```bash
python build.py
```

You will be asked:

```
What kind of amazing website do you want to build?
>>> kirana store website

   📋  Apni shop ki details do:

   🏪  Shop ka naam   : Sharma General Store
   📞  Contact number : +91 98765 43210
   📧  Email ID       : sharma@gmail.com
   📍  Address        : 12, Main Bazar, Ludhiana, Punjab
```

### What happens next

| Phase | What generates | Saved immediately |
|-------|---------------|-------------------|
| 1/4   | `ARCHITECTURE.md` — full design blueprint | ✅ |
| 2/4   | `index.html` — semantic HTML with real content | ✅ |
| 3/4   | `style.css` — glassmorphism, gradients, responsive | ✅ |
| 4/4   | `script.js` — nav toggle, scroll animations, forms | ✅ |

### Open your website

```bash
# Windows
start output\Shop_Name\index.html

# macOS
open output/Shop_Name/index.html

# Linux
xdg-open output/Shop_Name/index.html
```

---

## 🧠 How it works

```
User Input (idea + shop details)
        │
        ▼
 [Phase 1] Architecture LLM call
        │  → Saves ARCHITECTURE.md
        ▼
 [Phase 2] HTML LLM call  (uses architecture + shop details)
        │  → Saves index.html
        ▼
 [Phase 3] CSS LLM call   (uses architecture)
        │  → Saves style.css
        ▼
 [Phase 4] JS LLM call    (uses architecture)
           → Saves script.js
```

All responses are automatically cleaned:
- `<think>...</think>` blocks removed
- Markdown code fences stripped
- Raw, valid code saved directly

---

## 📦 Requirements

```
httpx>=0.27.0
python-dotenv>=1.0.0
```

Python **3.10+** required.

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `SARVAM_API_KEY` | Your Sarvam AI API key |

---

## 💡 Example Output

**Input:**
```
Website type : kirana store
Shop naam    : Ramji Kirana
Phone        : +91 99887 76655
Email        : ramji@gmail.com
Address      : Sector 22, Chandigarh
```

**Output** (`output/Ramji_Kirana/`):
- Modern dark-themed grocery store website
- Sticky navigation with mobile hamburger menu
- Hero section with shop name and CTA
- Products/categories section with cards
- Contact section with real phone, email, address
- Smooth scroll + fade-in animations

---

## 🤝 Contributing

Pull requests welcome! Some ideas:

- [ ] Add image generation for hero sections
- [ ] Support multi-page websites
- [ ] Export as ZIP
- [ ] Live preview in browser on completion

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<p align="center">Built with ❤️ using <a href="https://sarvam.ai">Sarvam AI</a></p>