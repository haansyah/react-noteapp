import React from "react";
import NoteItem from "./NoteItem";

export default function Archive({
  filtered,
  removeNoteHandler,
  archiveNoteHandler,
}) {
  return (
    <div className="container content mb-5">
      <h1 className="title">List your Archive</h1>
      <div className="d-flex flex-row flex-wrap align-self-stretch list-notes">
        {filtered.filter((note) => note.archived === true).length === 0 && (
          <div className="emptyNotes">There is no one Archived Note.</div>
        )}

        {filtered
          .filter((note) => note.archived === true)
          .map((note) => {
            return (
              <NoteItem
                key={note.id}
                note={note}
                removeNoteHandler={removeNoteHandler}
                archiveNoteHandler={archiveNoteHandler}
              />
            );
          })}
      </div>
    </div>
  );
}
