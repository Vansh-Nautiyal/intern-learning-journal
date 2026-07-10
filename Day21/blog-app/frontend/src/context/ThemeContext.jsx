import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import ThemeContext from "./themeContext";

const getStoredTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  return savedTheme === "dark" || savedTheme === "light"
    ? savedTheme
    : "dark";
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getStoredTheme);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
