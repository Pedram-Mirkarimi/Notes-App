# notecli — CLI Notes (Learning Project)

> **Learning / practice project (Lern-/Übungsprojekt).**  
> Built to practice Node.js fundamentals for my **FIAE Ausbildung application (start: ab 08/2026)**.

A small command-line notes manager. You can add, list, read, and remove notes stored locally.

---

## ✅ Core features
- Add notes (title + body)
- List saved notes
- Read a note by title
- Remove a note by title

<details>
<summary><b>Commands</b></summary>

```bash
node app.js add --title="Shopping" --body="Buy milk"
node app.js list
node app.js read --title="Shopping"
node app.js remove --title="Shopping"
```

</details>

---

## 🧰 Tech (learning focus)

* Node.js
* yargs (CLI)
* Local JSON storage

---

## ▶️ Quick start

```bash
npm install
node app.js list
```

---

## Notes

This repository is a **learning project**, not a production-ready tool.
