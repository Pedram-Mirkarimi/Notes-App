<div align="center">

# 🗒️ NoteCLI — Command-Line Notes Manager

A simple and clean **command-line notes manager** built with **Node.js**.  
Create, list, read, and remove notes — stored locally in a JSON file.

<br/>

![Node.js](https://img.shields.io/badge/Node.js-CLI-339933?logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=000)
![Yargs](https://img.shields.io/badge/Yargs-CLI%20Parser-6b7280)
![Chalk](https://img.shields.io/badge/Chalk-Terminal%20Colors-6b7280)
![Storage](https://img.shields.io/badge/Storage-notes.json-blue)

</div>

---

## 📌 Table of Contents
- [✨ Features](#-features)
- [🧰 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [⚙️ Commands](#️-commands)
- [🗃️ Data Storage](#️-data-storage)
- [👤 Author](#-author)

---

## ✨ Features
- ➕ Add notes with **title** + **body**
- 📋 List all saved notes
- 📖 Read a note by title
- 🗑️ Remove a note by title
- 🛡️ Prevent duplicate titles
- 💾 Local persistence via `notes.json`

---

## 🧰 Tech Stack

| Category | Technology |
|---|---|
| Runtime | Node.js |
| CLI | yargs |
| Terminal UI | chalk |
| Storage | JSON file (`notes.json`) |

---

## 📁 Project Structure

```txt
notecli/
├─ app.js
├─ notes.js
├─ notes.json
└─ package.json
````

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js installed

### 📥 Install

```bash
npm install
```

### ▶️ Run

Run directly:

```bash
node app.js <command> [options]
```

Or use the configured start script:

```bash
npm start
```

---

## ⚙️ Commands

| Command  | Description    | Example                                                |
| -------- | -------------- | ------------------------------------------------------ |
| `add`    | Add a new note | `node app.js add --title="Shopping" --body="Buy milk"` |
| `remove` | Remove a note  | `node app.js remove --title="Shopping"`                |
| `list`   | List all notes | `node app.js list`                                     |
| `read`   | Read a note    | `node app.js read --title="Shopping"`                  |

### Options

| Command  | Option    | Required | Description     |
| -------- | --------- | :------: | --------------- |
| `add`    | `--title` |     ✅    | Note title      |
| `add`    | `--body`  |     ✅    | Note body       |
| `remove` | `--title` |     ✅    | Title to remove |
| `read`   | `--title` |     ✅    | Title to read   |

---

## 🗃️ Data Storage

Notes are stored in `notes.json`.

* If you want to reset, you can delete `notes.json` (optional).
* For best practice, you may want to keep `notes.json` out of git (add it to `.gitignore`) and optionally provide a `notes.example.json`.

---

## 👤 Author

**S. AmirMohammad Mirkarimi**
GitHub: [S-AmirMohammad-Mirkarimi](https://github.com/S-AmirMohammad-Mirkarimi)
