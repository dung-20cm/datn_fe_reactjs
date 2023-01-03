import React from "react";
import useDarkMode from "use-dark-mode";
import { useTheme } from "../utils/useTheme";
import "./ThemeBtn.scss";
import { isWideScreen } from "../../helpers/screen";

const ThemeBtn = () => {
  const darkMode = useDarkMode(true);

  const theme = useTheme();

  return (
    <button
      className={`btn-theme ${theme}`}
      type="button"
      onClick={darkMode.toggle}
    >
      {isWideScreen() ? (
        <>{theme === "dark-mode" ? "Light mode" : "Dark mode"}</>
      ) : (
        <>{theme === "dark-mode" ? "Light" : "Dark"}</>
      )}
    </button>
  );
};
export default ThemeBtn;
