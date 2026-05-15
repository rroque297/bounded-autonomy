# Bounded Autonomy — AI Governance Research

A research showcase and interactive proof-of-concept demonstrating bounded autonomy through three design primitives: delegation, boundaries, and reversibility.

---

## Before you start — what you need to install (one time only)

### 1. Node.js
Node.js is the runtime that powers Vite. It also installs `npm` (Node Package Manager), which you'll use to install project dependencies and run commands.

- Go to **https://nodejs.org**
- Download the **LTS** version (the left button — "Long Term Support" means it's stable)
- Run the installer and follow the prompts
- To verify it worked, open your terminal and type: `node --version`
  - You should see something like `v20.11.0` — any number is fine

### 2. A code editor (recommended)
- Download **VS Code** from **https://code.visualstudio.com**
- It's free and has built-in terminal support

### 3. A terminal
- **Mac**: Press `Cmd + Space`, type "Terminal", press Enter
- **Windows**: Press `Win + R`, type `powershell`, press Enter
- **VS Code**: Menu → Terminal → New Terminal (easiest — opens right inside the editor)

---

## Step 1 — Get the project onto your computer

You already have the files from Claude. Put the `bounded-autonomy` folder somewhere sensible on your computer — your Desktop or a Documents/Projects folder works fine.

Your folder should look like this:
```
bounded-autonomy/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.js
    ├── style.css
    ├── simulator.js
    ├── results.js
    └── data/
        └── scenarios.js
```

---

## Step 2 — Open the project in your terminal

In your terminal, navigate to the project folder.

**The key command is `cd`** (change directory). It works like clicking into a folder.

```bash
# Example on Mac — adjust the path to where you put the folder
cd ~/Desktop/bounded-autonomy

# Example on Windows
cd C:\Users\YourName\Desktop\bounded-autonomy
```

**Tip**: In VS Code, open the `bounded-autonomy` folder via File → Open Folder, then use the built-in terminal (Ctrl+` or Cmd+`). It automatically starts in the right directory.

To confirm you're in the right place, type `ls` (Mac) or `dir` (Windows) — you should see `index.html` and `package.json` listed.

---

## Step 3 — Install dependencies

This downloads Vite (and any other tools listed in `package.json`) into a `node_modules` folder.

```bash
npm install
```

You'll see a lot of text scroll by — that's normal. It takes 20–60 seconds. When it finishes, you'll see something like `added 12 packages`.

You only ever need to run this once (or again if you add new packages later).

---

## Step 4 — Start the development server

```bash
npm run dev
```

This starts a local web server. Your terminal will display something like:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Open http://localhost:5173 in your browser.** Your site is running locally.

The magic of the dev server: any time you save a change to `index.html`, `style.css`, or any `.js` file, the browser updates automatically. No refresh needed.

To stop the server: go back to the terminal and press `Ctrl + C`.

---

## Step 5 — Making edits

| You want to change... | Edit this file |
|---|---|
| Text, page structure, HTML | `index.html` |
| Colors, fonts, layout, styling | `src/style.css` |
| Program name, institution, author | `index.html` (search for `[Program Name]`) |
| Scenario descriptions | `src/data/scenarios.js` |
| How the rule engine scores outcomes | `src/simulator.js` (the `runScenario` function) |
| Results section rendering | `src/results.js` |

---

## Step 6 — Building for deployment

When you're ready to publish, run:

```bash
npm run build
```

This creates a `dist/` folder containing the fully optimised, production-ready version of your site — compressed CSS, minified JS, everything a web host needs.

**You never edit files in `dist/` directly.** It gets regenerated every time you run `npm run build`.

---

## Step 7 — Deploying to Vercel (recommended)

Vercel is free for personal/academic projects and deploys your site in under a minute.

### One-time setup:
1. Create a free account at **https://vercel.com** (sign up with GitHub — see below)
2. Create a free account at **https://github.com** if you don't have one

### Put your project on GitHub:
1. Go to github.com → click the `+` button → New repository
2. Name it `bounded-autonomy`, set it to Public, click Create
3. Follow the instructions GitHub shows you to push your code (copy-paste the commands they give you into your terminal)

### Deploy from GitHub to Vercel:
1. Go to vercel.com → Add New → Project
2. Click "Import" next to your `bounded-autonomy` repository
3. Vercel detects it's a Vite project automatically — don't change any settings
4. Click Deploy

That's it. In about 30 seconds, Vercel gives you a live URL like `bounded-autonomy.vercel.app`.

**From now on:** every time you push new code to GitHub (`git push`), Vercel automatically rebuilds and redeploys. Your live site stays up to date with zero extra steps.

---

## Project structure explained

```
bounded-autonomy/
│
├── index.html              The page structure — what the browser renders.
│                           No CSS or JS here; those are imported by Vite.
│
├── package.json            Project identity card. Lists Vite as a dependency
│                           and defines the npm run dev / build / preview commands.
│
├── vite.config.js          Vite settings. Minimal for now — just sets the
│                           output folder and dev server port.
│
├── .gitignore              Tells Git which folders to skip (node_modules, dist).
│
└── src/                    All source files live here.
    │
    ├── main.js             Entry point. Imports CSS and all JS modules,
    │                       then calls init functions when the page loads.
    │
    ├── style.css           All CSS — variables, layout, components, animations.
    │
    ├── simulator.js        The rule engine (runScenario) and all simulator
    │                       UI logic (renderLog, updateScore, runNext, runAll).
    │
    ├── results.js          Pre-computes all model × scenario combinations
    │                       and renders the Results section.
    │
    └── data/
        └── scenarios.js    The single source of truth: MODELS and SCENARIOS.
                            Both simulator.js and results.js import from here.
```

---

## Common questions

**"I see a blank page"** — check the browser console (F12 → Console tab) for red error messages. The most common cause is a typo in a file path.

**"npm: command not found"** — Node.js didn't install correctly. Re-download from nodejs.org and try again.

**"Port 5173 already in use"** — another dev server is running. Either stop it (Ctrl+C in its terminal) or Vite will automatically try the next port (5174).

**"My changes aren't showing"** — make sure you saved the file (Ctrl+S / Cmd+S). The dev server updates on save, not on edit.

---

## Next steps in the roadmap

- [ ] Replace `[Program Name]`, `[Institution]` in `index.html` and the footer
- [ ] Add a favicon (a small icon shown in the browser tab)
- [ ] Set up a custom domain (e.g. `boundedautonomy.lab.edu`)
- [ ] Add the Analysis section full write-up
- [ ] GitHub repository → make it public to share with reviewers
