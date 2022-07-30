import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation({ ...props }) {
  const [randomx] = useState(Math.floor(Math.random() * props.notes.length));

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
            value={props.search}
            onChange={props.onSearchHandler}
            placeholder={
              props.notes.filter((note) => note).length > 2
                ? typeof props.notes[randomx] !== "undefined"
                  ? "Search : " + props.notes[randomx].title + " ?"
                  : "Search ...."
                : "Search ..."
            }
          />
        </div>
      </nav>
    </div>
  );
}
