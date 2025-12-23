<h1 align="center">🗒️ Notes App (CLI)</h1>

<p align="center">
  A lightweight command-line notes manager built with <b>Node.js</b> — powered by <b>Yargs</b> and styled with <b>Chalk</b>.
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-CLI-informational" />
  <img alt="Language" src="https://img.shields.io/badge/Language-JavaScript-yellow" />
  <img alt="Storage" src="https://img.shields.io/badge/Storage-notes.json-blue" />
  <img alt="Interface" src="https://img.shields.io/badge/Interface-Terminal-lightgrey" />
</p>

---

## 📌 Table of Contents
- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Usage](#️-usage)
  - [Commands](#commands)
  - [Options](#options)
- [🗃️ Data Storage](#️-data-storage)
- [🛣️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [👤 Author](#-author)
- [📜 License](#-license)

---

## ✨ Features
- ➕ **Create Notes** — add a new note with a **unique** title and a body
- 🗑️ **Delete Notes** — remove notes by title
- 📋 **List Notes** — get a quick overview of saved notes
- 📖 **Read a Note** — view the full content of a note by title
- 💾 **Data Persistence** — stored locally in `notes.json`
- 🛡️ **Duplicate Prevention** — blocks duplicate note titles

---

## 🧰 Tech Stack
| Category | Technology | Purpose |
|---|---|---|
| Runtime | Node.js | Run the app in the terminal |
| CLI Framework | Yargs | Parse commands & flags |
| Terminal Styling | Chalk | Colorful, readable output |
| Storage | JSON file (`notes.json`) | Simple persistence between runs |

---

## 📁 Project Structure
| File | Description |
|---|---|
| `app.js` | CLI entry point: command definitions & arguments |
| `notes.js` | Notes logic (create/read/list/remove + persistence) |
| `notes.json` | Local data store (auto-updated) |
| `package.json` | Dependencies & project metadata |
| `package-lock.json` | Locked dependency tree |

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js installed on your machine

### 📥 Installation
```bash
git clone https://github.com/Pedram-Mirkarimi/Notes-App.git
cd Notes-App
npm install
````

---

## ⚙️ Usage

Run the CLI using:

```bash
node app.js <command> [options]
```

### Commands

| Command  | What it does                | Example                                                |
| -------- | --------------------------- | ------------------------------------------------------ |
| `add`    | Create and save a new note  | `node app.js add --title="Shopping" --body="Buy milk"` |
| `remove` | Delete a note by title      | `node app.js remove --title="Shopping"`                |
| `list`   | List all note titles        | `node app.js list`                                     |
| `read`   | Show a note’s body by title | `node app.js read --title="Shopping"`                  |

### Options

| Command  | Option    | Required | Description                 |
| -------- | --------- | -------: | --------------------------- |
| `add`    | `--title` |        ✅ | Note title (must be unique) |
| `add`    | `--body`  |        ✅ | Note content                |
| `remove` | `--title` |        ✅ | Title of the note to remove |
| `read`   | `--title` |        ✅ | Title of the note to read   |

---

## 🗃️ Data Storage

Notes are stored locally in:

* `notes.json`

This keeps the app fast, simple, and portable — great for demonstrating Node.js CLI patterns.

> Tip: Delete `notes.json` if you want to reset your local notes.

---

## 🛣️ Roadmap

Want to make it even more portfolio-ready? Here are strong upgrades:

* [ ] ✏️ `update` command (edit note body by title)
* [ ] 🔎 `search` command (find notes by keyword)
* [ ] 🏷️ Tags support (`--tags=work,personal`)
* [ ] 📤 Export / Import (Markdown / CSV)
* [ ] 🧪 Tests (Jest) + GitHub Actions CI
* [ ] 🌍 Publish as a global CLI package (`npm i -g`)

---

## 🤝 Contributing

Contributions and suggestions are welcome:

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👤 Author

**Pedram Mirkarimi**
GitHub: [https://github.com/Pedram-Mirkarimi](https://github.com/Pedram-Mirkarimi)
