import React from "react";

export default function DarkMode({ darkMode, darkModeHandler }) {
  return (
    <div>
      <input
        id="dark-mode"
        type="checkbox"
        className="toggle-theme d-none"
        aria-label="Toggle Theme"
        value={darkMode}
        onClick={darkModeHandler}
      />
      <div className="label-toggle-parent">
        <label htmlFor="dark-mode" className="label-toggle">
          <img
            src="/icons/ic_moon.svg"
            width="50%"
            className="ic-theme"
            id="ic-dark"
            alt="Icon Dark"
          />
          <img
            src="/icons/ic_sun.svg"
            width="50%"
            className="ic-theme"
            id="ic-light"
            alt="Icon Light"
          />
        </label>
      </div>
    </div>
  );
}
