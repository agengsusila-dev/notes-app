import React from "react";

import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NotesActive from "./NotesActive";
import NotesArchive from "./NotesArchive";
import NoteInput from "./NoteInput";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchQuery: "",
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onSearchHandler(inputQuery) {
    if (inputQuery.trim() === "") {
      this.setState({ notes: getInitialData() });
    } else {
      const filteredNotes = this.state.notes.filter((notes) => {
        return notes.title.toLowerCase().includes(inputQuery.toLowerCase());
      });
      this.setState({ notes: filteredNotes });
    }
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const notes = this.state.notes;
    const activeNotes = notes.filter((note) => {
      return note.archived === false;
    });
    const archiveNotes = notes.filter((note) => {
      return note.archived === true;
    });

    return (
      <div className="note-app">
        <NoteHeader onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Active Notes</h2>
          <NotesActive
            notes={activeNotes}
            onArchive={this.onArchiveHandler}
            onDelete={this.onDeleteHandler}
          />
          <h2>Archive Notes</h2>
          <NotesArchive
            notes={archiveNotes}
            onArchive={this.onArchiveHandler}
            onDelete={this.onDeleteHandler}
            isArchive
          />
        </div>
      </div>
    );
  }
}

export default NoteApp;
