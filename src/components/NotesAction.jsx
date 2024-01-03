/* eslint-disable react/prop-types */
import ArchiveButton from "./buttons/ArchiveButton";
import DeleteButton from "./buttons/DeleteButton";

function NotesAction({ id, onDelete, onArchive, isArchive }) {
  return (
    <div className="note-item__action">
      <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesAction;
