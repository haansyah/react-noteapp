import React from "react";
import NoteItem from "./NoteItem";

export default function Notes({
  filtered,
  removeNoteHandler,
  archiveNoteHandler,
}) {
  return (
    <div className="container content mb-5">
      <h1 className="title">List your Notes</h1>
      <div className="d-flex flex-row flex-wrap align-self-stretch list-notes">
        {filtered.filter((note) => note.archived === false).length === 0 && (
          <div className="emptyNotes">There is no Note, please Add a Note.</div>
        )}

        {filtered
          .filter((note) => note.archived === false)
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

// onClick={removeTodoHandler.bind(this, todo.id)}
