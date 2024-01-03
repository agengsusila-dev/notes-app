/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";

function NoteHeader({ onSearch }) {
  return (
    <nav className="note-app__header">
      <h1>Notes</h1>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </nav>
  );
}

export default NoteHeader;
