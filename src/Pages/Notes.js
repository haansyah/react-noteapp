import React from "react";
import NoteItem from "./NoteItem";

export default function Notes({ ...props }) {
  return (
    <div className="container content mb-5">
      <h1 className="title">List your Notes</h1>
      <div className="d-flex flex-row flex-wrap align-self-stretch list-notes">
        {props.filtered.filter((note) => note.archived === false).length ===
          0 && (
          <div className="emptyNotes">
            {props.search
              ? "No search results found :("
              : "There is no Note, please Add a Note."}
          </div>
        )}

        {props.filtered
          .filter((note) => note.archived === false)
          .map((note) => {
            return (
              <NoteItem
                key={note.id}
                note={note}
                removeNoteHandler={props.removeNoteHandler}
                archiveNoteHandler={props.archiveNoteHandler}
              />
            );
          })}
      </div>
    </div>
  );
}

// onClick={removeTodoHandler.bind(this, todo.id)}
