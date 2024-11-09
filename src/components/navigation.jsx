import "./navigation.css";
import sunIcon from "../assets/sunIcon.svg";
import moonIcon from "../assets/moonIcon.svg";
import React from "react";

export default function Navigation() {
  const [darkMode, setDarkMode] = React.useState(true);

  const toggle = function () {
    setDarkMode((prevTheme) => !prevTheme);
  };
  return (
    <nav>
      <div className="logo">
        <h2>devfinder</h2>
      </div>
      <div className="theme-switcher">
        <h2>light</h2>
        {darkMode ? (
          <img onClick={toggle} src={sunIcon} alt="light mode icon" />
        ) : (
          <img onClick={toggle} src={moonIcon} alt="dark mode icon" />
        )}
      </div>
    </nav>
  );
}
