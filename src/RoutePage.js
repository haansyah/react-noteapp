import React from "react";
import { Routes, Route } from "react-router-dom";

import Notes from "./Pages/Notes";
import Archive from "./Pages/Archive";

export default function RoutePage({ ...props }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Notes
              search={props.search}
              filtered={props.filtered}
              removeNoteHandler={props.removeNoteHandler}
              archiveNoteHandler={props.archiveNoteHandler}
            />
          }
        />
        <Route
          path="/archived"
          element={
            <Archive
              search={props.search}
              filtered={props.filtered}
              removeNoteHandler={props.removeNoteHandler}
              archiveNoteHandler={props.archiveNoteHandler}
            />
          }
        />
      </Routes>
    </>
  );
}
