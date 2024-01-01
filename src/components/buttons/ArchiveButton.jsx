/* eslint-disable react/prop-types */
function ArchiveButton({ id, onArchive, isArchive }) {
  return (
    <button className="note-item__archive-button" onClick={() => onArchive(id)}>
      {isArchive ? "Go to Active" : "Archive"}
    </button>
  );
}

export default ArchiveButton;
