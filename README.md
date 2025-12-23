````md
# Notes App (CLI) — اپ یادداشت (خط فرمان) — Notizen-App (CLI)

> **Language / زبان / Sprache:**  
> این README سه‌زبانه است. از بخش‌های زیر (جمع‌شونده) زبان مورد نظرت را باز کن.  
> This README is trilingual. Open the collapsible section for your preferred language.  
> Dieses README ist dreisprachig. Öffne den einklappbaren Abschnitt für deine Sprache.

---

<details open>
<summary><strong>🇮🇷 فارسی</strong></summary>

## معرفی پروژه
**Notes App** یک برنامه‌ی مدیریت یادداشت **در خط فرمان (CLI)** است که با **Node.js** ساخته شده و به شما اجازه می‌دهد داخل ترمینال، یادداشت‌ها را **ایجاد، مشاهده، لیست و حذف** کنید.  
ذخیره‌سازی اطلاعات به‌صورت **فایل JSON محلی** انجام می‌شود (سبک، ساده، قابل حمل و مناسب برای نمایش مهارت‌های پایه تا متوسط در ساخت CLI).

---

## ویژگی‌ها
- افزودن یادداشت با **عنوان** و **متن**
- حذف یادداشت با عنوان
- لیست کردن همه‌ی یادداشت‌ها
- خواندن/نمایش یک یادداشت با عنوان
- ذخیره‌سازی پایدار در فایل محلی `notes.json`
- جلوگیری از ثبت یادداشت تکراری (عنوان تکراری)

---

## تکنولوژی‌ها
- **Node.js**
- **Yargs** برای ساخت و مدیریت دستورات CLI
- **Chalk** برای خروجی رنگی و خواناتر در ترمینال
- **JSON File Storage** برای ذخیره‌سازی داده‌ها

---

## ساختار پروژه
```text
Notes-App/
├─ app.js          # نقطه‌ی ورود CLI (تعریف دستورات و پارامترها)
├─ notes.js        # منطق برنامه (CRUD + خواندن/نوشتن فایل)
├─ notes.json      # دیتای محلی (خودکار بروزرسانی می‌شود)
├─ package.json
└─ package-lock.json
````

---

## شروع سریع

### پیش‌نیاز

* نصب بودن **Node.js**

### نصب

```bash
git clone https://github.com/Pedram-Mirkarimi/Notes-App.git
cd Notes-App
npm install
```

---

## نحوه استفاده

فرمت کلی:

```bash
node app.js <command> [options]
```

### افزودن یادداشت

```bash
node app.js add --title="Shopping" --body="Buy milk and eggs"
```

* `--title` (ضروری): عنوان یادداشت (باید یکتا باشد)
* `--body` (ضروری): متن یادداشت

### حذف یادداشت

```bash
node app.js remove --title="Shopping"
```

* `--title` (ضروری): عنوان یادداشت برای حذف

### لیست یادداشت‌ها

```bash
node app.js list
```

### خواندن یک یادداشت

```bash
node app.js read --title="Shopping"
```

* `--title` (ضروری): عنوان یادداشت برای نمایش

---

## ذخیره‌سازی داده‌ها

یادداشت‌ها در فایل `notes.json` ذخیره می‌شوند. این روش عمداً ساده نگه داشته شده تا ساختار و منطق ساخت CLI در Node.js واضح و قابل بررسی باشد.

> نکته: برای ریست کردن داده‌ها می‌توانی `notes.json` را حذف کنی.

---

## پیشنهادهای ارتقا (برای رزومه/پورتفولیو قوی‌تر)

* افزودن دستور **ویرایش** (`update --title --body`)
* افزودن **جستجو** (`search --query`)
* افزودن **برچسب‌ها** (`--tags=work,personal`)
* امکان **خروجی گرفتن/ورودی گرفتن** (Markdown/CSV)
* اضافه کردن **تست** (Jest) و CI (GitHub Actions)
* تبدیل پروژه به یک CLI قابل نصب سراسری (`npm i -g` / `npm link`)

---

## مشارکت

پیشنهادها و PRها خوش‌آمدند:

1. Fork
2. ساخت Branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add feature"`
4. Push: `git push origin feature/your-feature`
5. Pull Request

---

## لایسنس

اگر می‌خواهی پروژه کاملاً پورتفولیو-ریڈی باشد، پیشنهاد می‌شود یک لایسنس مثل **MIT** اضافه کنی و فایل `LICENSE` بسازی.

---

## نویسنده

**Pedram Mirkarimi**
GitHub: [https://github.com/Pedram-Mirkarimi](https://github.com/Pedram-Mirkarimi)

</details>

---

<details>
<summary><strong>🇬🇧 English</strong></summary>

## Overview

**Notes App** is a lightweight **command-line notes manager (CLI)** built with **Node.js**.
It lets you **create, read, list, and remove** notes directly from your terminal. Data is stored locally in a simple **JSON file** for portability and clarity—ideal for showcasing Node.js CLI fundamentals.

---

## Features

* Add notes with **title** and **body**
* Remove notes by title
* List all notes
* Read/print a note by title
* Persistent local storage via `notes.json`
* Duplicate title prevention

---

## Tech Stack

* **Node.js**
* **Yargs** (command parsing & options)
* **Chalk** (colorful terminal output)
* **JSON file storage**

---

## Project Structure

```text
Notes-App/
├─ app.js          # CLI entry point (commands & options)
├─ notes.js        # Core logic (CRUD + persistence)
├─ notes.json      # Local storage (auto-updated)
├─ package.json
└─ package-lock.json
```

---

## Getting Started

### Prerequisites

* **Node.js** installed

### Install

```bash
git clone https://github.com/Pedram-Mirkarimi/Notes-App.git
cd Notes-App
npm install
```

---

## Usage

General format:

```bash
node app.js <command> [options]
```

### Add a note

```bash
node app.js add --title="Shopping" --body="Buy milk and eggs"
```

* `--title` (required): unique note title
* `--body` (required): note content

### Remove a note

```bash
node app.js remove --title="Shopping"
```

* `--title` (required): note title to remove

### List notes

```bash
node app.js list
```

### Read a note

```bash
node app.js read --title="Shopping"
```

* `--title` (required): note title to read

---

## Data Storage

Notes are stored in `notes.json`. This intentionally simple approach keeps the project easy to understand and review.

> Tip: Delete `notes.json` to reset local data.

---

## Portfolio-Ready Improvements (Roadmap)

* Add **update/edit** command (`update --title --body`)
* Add **search** (`search --query`)
* Add **tags** (`--tags=work,personal`)
* Add **export/import** (Markdown/CSV)
* Add **tests** (Jest) + CI (GitHub Actions)
* Publish as a global CLI (`npm link` / `npm i -g`)

---

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

To make it fully portfolio-ready, consider adding an **MIT License** and a `LICENSE` file.

---

## Author

**Pedram Mirkarimi**
GitHub: [https://github.com/Pedram-Mirkarimi](https://github.com/Pedram-Mirkarimi)

</details>

---

<details>
<summary><strong>🇩🇪 Deutsch</strong></summary>

## Übersicht

**Notes App** ist ein schlanker **Kommandozeilen-Notizmanager (CLI)**, erstellt mit **Node.js**.
Du kannst Notizen direkt im Terminal **anlegen, lesen, auflisten und löschen**. Die Daten werden lokal in einer **JSON-Datei** gespeichert – einfach, nachvollziehbar und ideal, um Node.js-CLI-Kenntnisse zu demonstrieren.

---

## Funktionen

* Notizen hinzufügen mit **Titel** und **Text**
* Notizen nach Titel löschen
* Alle Notizen auflisten
* Einzelne Notiz nach Titel anzeigen
* Persistente Speicherung in `notes.json`
* Verhindert doppelte Titel

---

## Tech-Stack

* **Node.js**
* **Yargs** (CLI-Kommandos & Optionen)
* **Chalk** (farbige Terminalausgabe)
* **JSON-Dateispeicher**

---

## Projektstruktur

```text
Notes-App/
├─ app.js          # CLI-Einstieg (Kommandos & Optionen)
├─ notes.js        # Kernlogik (CRUD + Persistenz)
├─ notes.json      # Lokale Daten (wird automatisch aktualisiert)
├─ package.json
└─ package-lock.json
```

---

## Schnellstart

### Voraussetzungen

* **Node.js** installiert

### Installation

```bash
git clone https://github.com/Pedram-Mirkarimi/Notes-App.git
cd Notes-App
npm install
```

---

## Verwendung

Allgemeines Format:

```bash
node app.js <command> [options]
```

### Notiz hinzufügen

```bash
node app.js add --title="Shopping" --body="Buy milk and eggs"
```

* `--title` (erforderlich): eindeutiger Titel
* `--body` (erforderlich): Inhalt der Notiz

### Notiz löschen

```bash
node app.js remove --title="Shopping"
```

* `--title` (erforderlich): Titel der zu löschenden Notiz

### Notizen auflisten

```bash
node app.js list
```

### Notiz lesen

```bash
node app.js read --title="Shopping"
```

* `--title` (erforderlich): Titel der Notiz

---

## Datenspeicherung

Notizen werden in `notes.json` gespeichert. Dieser bewusst einfache Ansatz macht das Projekt leicht verständlich und gut reviewbar.

> Tipp: `notes.json` löschen, um lokale Daten zurückzusetzen.

---

## Verbesserungen fürs Portfolio (Roadmap)

* **Update/Edit**-Kommando (`update --title --body`)
* **Suche** (`search --query`)
* **Tags** (`--tags=work,personal`)
* **Export/Import** (Markdown/CSV)
* **Tests** (Jest) + CI (GitHub Actions)
* Als globales CLI veröffentlichen (`npm link` / `npm i -g`)

---

## Mitmachen (Contributing)

1. Fork erstellen
2. Branch anlegen: `git checkout -b feature/your-feature`
3. Commit: `git commit -m "Add feature"`
4. Push: `git push origin feature/your-feature`
5. Pull Request öffnen

---

## Lizenz

Für ein „portfolio-ready“ Projekt empfiehlt sich z. B. eine **MIT-Lizenz** plus `LICENSE`-Datei.

---

## Autor

**Pedram Mirkarimi**
GitHub: [https://github.com/Pedram-Mirkarimi](https://github.com/Pedram-Mirkarimi)

</details>
```
