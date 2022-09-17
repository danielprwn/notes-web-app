import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header-app">
      <h1>REACT NOTE APP! 🖊</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        ⬜ Light ⬛ Dark
      </button>
    </div>
  );
};

export default Header;
