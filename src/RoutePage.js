import React from "react";
import { Routes, Route } from "react-router-dom";

import Notes from "./Pages/Notes";
import Archive from "./Pages/Archive";

export default function RoutePage({
  filtered,
  removeNoteHandler,
  archiveNoteHandler,
}) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Notes
              filtered={filtered}
              removeNoteHandler={removeNoteHandler}
              archiveNoteHandler={archiveNoteHandler}
            />
          }
        />
        <Route
          path="/archived"
          element={
            <Archive
              filtered={filtered}
              removeNoteHandler={removeNoteHandler}
              archiveNoteHandler={archiveNoteHandler}
            />
          }
        />
      </Routes>
    </>
  );
}
