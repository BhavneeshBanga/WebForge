<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=WebForge&fontSize=60&fontColor=fff&animation=fadeIn&fontAlignY=38&desc=AI%20Powered%20Website%20Builder&descAlignY=60&descSize=18" width="100%"/>

<h1>🚀 WebForge</h1>

<p><strong>AI-powered website builder</strong> — type your idea, enter your shop details, get a complete modern website in minutes.</p>

<p>Built on top of <strong>Sarvam AI (105B)</strong>, WebForge generates a full architecture blueprint and then sequentially produces <code>index.html</code>, <code>style.css</code>, and <code>script.js</code> — saving each file the moment it's ready.</p>

<br/>

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Sarvam AI](https://img.shields.io/badge/Sarvam_AI-105B-FF6B6B?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)

</div>

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
├── build.py            ← main script (run this)
├── .env                ← your API key (create from .env.example)
├── .env.example        ← template
├── requirements.txt    ← dependencies
├── README.md
└── output/             ← generated websites land here
    └── Shop_Name/
        ├── ARCHITECTURE.md
        ├── index.html
        ├── style.css
        └── script.js
```

---

## ⚙️ Setup

**1. Clone the repo**

```bash
git clone https://github.com/your-username/webForge.git
cd webForge
```

**2. Install dependencies**

```bash
pip install -r requirements.txt
```

**3. Create your `.env` file**

```bash
cp .env.example .env
```

Open `.env` and add your Sarvam API key:

```env
SARVAM_API_KEY=sk_xxxxxxxxxxxxxxxx
```

> 🔑 Get your API key from [sarvam.ai](https://sarvam.ai)

---

## ▶️ Usage

```bash
python build.py
```

You will be asked a few questions:

```
What kind of amazing website do you want to build?
>>> kirana store website

   📋  Apni shop ki details do:

   🏪  Shop ka naam   : Sharma General Store
   📞  Contact number : +91 98765 43210
   📧  Email ID       : sharma@gmail.com
   📍  Address        : 12, Main Bazar, Ludhiana, Punjab
```

---

## 🔄 How It Works

```
User Input (idea + shop details)
          │
          ▼
  [Phase 1/4]  Architecture LLM call
          │    └─ 💾 Saves ARCHITECTURE.md
          ▼
  [Phase 2/4]  HTML LLM call
          │    └─ 💾 Saves index.html
          ▼
  [Phase 3/4]  CSS LLM call
          │    └─ 💾 Saves style.css
          ▼
  [Phase 4/4]  JavaScript LLM call
               └─ 💾 Saves script.js
```

| Phase | Output | Saved |
|:-----:|--------|:-----:|
| 1/4 | `ARCHITECTURE.md` — full design blueprint | ✅ |
| 2/4 | `index.html` — semantic HTML with real content | ✅ |
| 3/4 | `style.css` — glassmorphism, gradients, responsive | ✅ |
| 4/4 | `script.js` — nav toggle, scroll animations, forms | ✅ |

All responses are automatically cleaned:
- `<think>...</think>` blocks removed
- Markdown code fences stripped
- Raw, valid code saved directly to disk

---

## 💡 Example Output

**Input**

```
Website type : Kirana Store
Shop naam    : Ramji Kirana
Phone        : +91 99887 76655
Email        : ramji@gmail.com
Address      : Sector 22, Chandigarh
```

**Output** → `output/Ramji_Kirana/`

- Modern dark-themed grocery store website
- Sticky navigation with mobile hamburger menu
- Hero section with shop name and CTA button
- Products/categories section with cards
- Contact section with real phone, email, and address
- Smooth scroll + fade-in animations on all sections

---

## 📦 Requirements

```
httpx>=0.27.0
python-dotenv>=1.0.0
```

> Python **3.10+** required

---

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `SARVAM_API_KEY` | Your Sarvam AI API key |

---

## 🤝 Contributing

Pull requests welcome! Some ideas for future features:

- [ ] Image generation for hero sections
- [ ] Multi-page website support
- [ ] Export output as ZIP
- [ ] Live browser preview on completion
- [ ] Dark / light mode toggle generation

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

<p>Built with ❤️ using <a href="https://sarvam.ai">Sarvam AI</a></p>

</div>