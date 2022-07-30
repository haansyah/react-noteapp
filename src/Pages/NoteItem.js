import React from "react";

export default function NoteItem({
  note,
  removeNoteHandler,
  archiveNoteHandler,
}) {
  return (
    <div className="col-6 col-md-4 col-lg-3 p-2">
      <div className="item-notes h-100 d-flex flex-column">
        <div className="info d-flex flex-column">
          <p className="date">{note.createdAt}</p>
          <h2 className="title">{note.title}</h2>
          <p className="description">{note.body}</p>
        </div>
        <div className="action mt-auto">
          <div className="d-flex flex-row justify-content-center">
            <button
              className="delete w-100"
              onClick={() => removeNoteHandler(note.id)}
            >
              Delete
            </button>
            <span className="">|</span>
            <input
              className="archive d-none"
              type="checkbox"
              id={`archive${note.id}`}
              checked={note.archived}
              onChange={archiveNoteHandler.bind(this, note)}
            />
            <label
              htmlFor={`archive${note.id}`}
              className="archive-label w-100 text-center"
            >
              {note.archived ? "Unarchive" : "Archive"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
