# Shaik Noor Aien — React Portfolio

A modern, responsive portfolio website built with **React.js**.

## 🚀 Tech Stack
- React 18
- CSS Modules (component-scoped CSS)
- Anthropic Claude API (AI Chatbot)
- Google Fonts (Syne + DM Sans)

## 📁 Project Structure
```
src/
├── components/
│   ├── Navbar.js / Navbar.css
│   ├── Hero.js / Hero.css
│   ├── About.js / About.css
│   ├── Skills.js / Skills.css
│   ├── Experience.js / Experience.css
│   ├── Projects.js / Projects.css
│   ├── Awards.js / Awards.css
│   ├── Volunteering.js / Volunteering.css
│   ├── Contact.js / Contact.css
│   ├── Chatbot.js / Chatbot.css
│   └── Footer.js / Footer.css
├── hooks/
│   └── useScrollFade.js
├── data.js          ← All portfolio content lives here
├── App.js
├── index.js
└── index.css
```

## 🛠️ Setup & Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🌐 Deploy on Netlify (Free)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → New site
3. Drag & drop the `build/` folder
4. Done! You'll get a live URL instantly.

## 🌐 Deploy on Vercel (Free)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import project
3. Select the repo → Deploy
4. Done! Auto-deploys on every push.

## ✏️ Customization
- Edit `src/data.js` to update all content (skills, projects, awards, etc.)
- Replace the avatar URL in `Hero.js` with your actual photo
- Update `RESUME_CONTEXT` in `data.js` to improve the AI chatbot responses
