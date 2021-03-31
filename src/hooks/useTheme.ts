import React from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const useTheme = () => {
  const { isDark, toggleTheme, componentMounted } = React.useContext(
    ThemeContext
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    isDark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [isDark]);

  return { isDark, toggleTheme, componentMounted };
};

export default useTheme;
