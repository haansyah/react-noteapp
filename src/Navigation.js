import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation({ search, onSearchHandler, notes }) {
  const [randomx] = useState(Math.floor(Math.random() * notes.length));

  return (
    <div className="container navigation">
      <nav className="nav-links">
        <NavLink to="/" className="nav-item" activeclassname="active">
          Notes
        </NavLink>
        <NavLink to="/archived" className="nav-item" activeclassname="active">
          Archive
        </NavLink>
        <div className="form-group d-inline-block ms-3">
          <input
            type="text"
            id="search"
            className="form-control"
            value={search}
            onChange={onSearchHandler}
            placeholder={
              notes.filter((note) => note).length > 2
                ? typeof notes[randomx] !== "undefined"
                  ? "Search : " + notes[randomx].title + " ?"
                  : "Search ...."
                : "Search ..."
            }
          />
        </div>
      </nav>
    </div>
  );
}
