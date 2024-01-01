/* eslint-disable react/prop-types */
import NotesItem from "./NotesItem";

function NotesArchive({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="note-list__empty-message">Empty notes list</p>
      ) : (
        notes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            isArchive={note.archived}
            {...note}
          />
        ))
      )}
    </div>
  );
}

export default NotesArchive;
