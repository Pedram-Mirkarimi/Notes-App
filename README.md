# Notes App 📝

A simple and lightweight notes management application built with Node.js and Express.  
This application allows users to create, read, update, and delete notes stored in a JSON file.

---

## 🚀 Features

- Create new notes
- Read and list existing notes
- Edit and update saved notes
- Delete notes by ID
- Fast and lightweight (no database required)
- Simple file-based storage

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Node.js, Express.js |
| Storage | Local JSON File |

---

## 📂 Project Structure

```
notes-app/
 ├─ app.js              # Main server file and route handling
 ├─ notes.js            # CRUD operations for notes
 ├─ notes.json          # Notes data storage (auto-updated)
 ├─ package.json        # Dependencies and scripts
```

---

## 📌 Requirements

- Node.js v14+
- npm (Node Package Manager)

---

## ⚙️ Installation & Setup

```bash
# Clone the project
git clone https://github.com/pedram-mirkarimi/notes-app.git

# Navigate into project directory
cd notes-app

# Install dependencies
npm install
```

---

## ▶️ Run the App

```bash
node app.js
```

The application will start at:

```
http://localhost:3000
```

---

## ✅ Usage

Endpoints may include:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | Get all notes |
| GET | `/notes/:id` | Get a specific note |
| POST | `/notes` | Create a new note |
| PUT | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Remove a note |

> Request/Response format may vary based on implementation.

---

## 🧩 Future Improvements

- Add user authentication
- Move from JSON file to a database (MongoDB / PostgreSQL)
- Add frontend interface
- Improve error handling

---

## 👨‍💻 Author

Developed by **Pedram Mirkarimi**