/* eslint-disable react/prop-types */
import ArchiveButton from "./buttons/ArchiveButton";
import DeleteButton from "./buttons/DeleteButton";

function NotesAction({ id, onDelete, onArchive }) {
  return (
    <div className="note-item__action">
      <ArchiveButton id={id} onArchive={onArchive} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesAction;
