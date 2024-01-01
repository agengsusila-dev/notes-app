/* eslint-disable react/prop-types */
import { showFormattedDate } from "../utils";
import NotesAction from "./NotesAction";
import NotesItemContent from "./NotesItemContent";

function NotesItem({
  title,
  body,
  createdAt,
  id,
  onDelete,
  onArchive,
  isArchive,
}) {
  return (
    <div className="note-item">
      <NotesItemContent
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
      />
      <NotesAction
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        isArchive={isArchive}
      />
    </div>
  );
}

export default NotesItem;
