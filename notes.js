const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const NOTES_FILE = path.join(__dirname, 'notes.json');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.inverse.green('New note added!'));
  } else {
    console.log(chalk.inverse.red('Note title taken!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.inverse.green('Note removed!'));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.inverse.red('No note found!'));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse.blueBright('Your notes!'));

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log('Title: ' + chalk.bold.cyan(note.title));
    console.log('Body : ' + note.body);
  } else {
    console.log(chalk.inverse.red('No note found!'));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(NOTES_FILE, dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(NOTES_FILE);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
