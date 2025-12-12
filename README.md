# 📝 Notes App CLI

A simple and efficient command-line interface (CLI) application for managing your notes directly from the terminal. Built with **Node.js**, this tool leverages the **Yargs** library for powerful command parsing and **Chalk** for a colorful, user-friendly experience.

---

## ✨ Features

- **Create Notes**: Easily add new notes with a unique title and a body.
- **Delete Notes**: Remove notes you no longer need by specifying their title.
- **List All Notes**: Get a quick overview of all your saved notes.
- **Read a Note**: Display the full content of a specific note.
- **Data Persistence**: All notes are saved locally in a `notes.json` file, so your data is preserved between sessions.
- **Duplicate Prevention**: The application prevents you from adding notes with duplicate titles.

---

## 🛠️ Tech Stack

| Category             | Technology | Description                                               |
| -------------------- | ---------- | --------------------------------------------------------- |
| **Runtime**          | Node.js    | The JavaScript runtime environment for executing the app. |
| **CLI Framework**    | Yargs      | A library for building interactive command-line tools.    |
| **Terminal Styling** | Chalk      | A library for styling terminal string output with colors. |
| **Data Storage**     | JSON       | Notes are stored in a simple `notes.json` file.           |

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/Pedram-Mirkarimi/Notes-App.git
    ```
2.  Navigate into the project directory:
    ```sh
    cd Notes-App
    ```
3.  Install the necessary dependencies:
    ```sh
    npm install
    ```

---

## ⚙️ Usage

This application is run from the command line using `node app.js` followed by a command.

### Available Commands

#### 1. Add a Note

Creates and saves a new note.

```sh
node app.js add --title="Your Note Title" --body="The content of your note."
```

- `--title`: **(Required)** The title of the note. Must be unique.
- `--body`: **(Required)** The main content of the note.

#### 2. Remove a Note

Deletes a note based on its title.

```sh
node app.js remove --title="Note Title to Delete"
```

- `--title`: **(Required)** The title of the note you want to remove.

#### 3. List All Notes

Displays the titles of all saved notes.

```sh
node app.js list
```

#### 4. Read a Note

Shows the body of a specific note.

```sh
node app.js read --title="Note Title to Read"
```

- `--title`: **(Required)** The title of the note you wish to view.

---
