import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme: handleToggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.PropTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
