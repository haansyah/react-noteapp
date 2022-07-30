import React from "react";

export default function NoteItem({ ...props }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 p-2">
      <div className="item-notes h-100 d-flex flex-column">
        <div className="info d-flex flex-column">
          <p className="date">{props.note.createdAt}</p>
          <h2 className="title">{props.note.title}</h2>
          <p className="description">{props.note.body}</p>
        </div>
        <div className="action mt-auto">
          <div className="d-flex flex-row justify-content-center">
            <button
              className="delete w-100"
              onClick={() => props.removeNoteHandler(props.note.id)}
            >
              Delete
            </button>
            <span className="">|</span>
            <input
              className="archive d-none"
              type="checkbox"
              id={`archive${props.note.id}`}
              checked={props.note.archived}
              onChange={props.archiveNoteHandler.bind(this, props.note)}
            />
            <label
              htmlFor={`archive${props.note.id}`}
              className="archive-label w-100 text-center"
            >
              {props.note.archived ? "Unarchive" : "Archive"}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
