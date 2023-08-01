import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context";

export default function Button(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <button
      onClick={props.onClick}
      style={{
        background: theme === "dark" ? "#000" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      {props.children}
    </button>
  );
}

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
