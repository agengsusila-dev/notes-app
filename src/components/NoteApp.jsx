import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NotesActive from "./NotesActive";
import NotesArchive from "./NotesArchive";

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
  }

  onSearchHandler(inputQuery) {
    this.setState(() => {
      return {
        searchQuery: inputQuery,
      };
    });
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
        <NoteHeader searchNote={this.onSearchHandler} />
        <div className="note-app__body">
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
