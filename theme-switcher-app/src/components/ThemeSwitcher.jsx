import { useContext } from "react";

import { ThemeContext } from "../ThemeContext";

export default function ThemeSwitcher() {

    const { theme, toggleTheme } =
        useContext(ThemeContext);

    return (
        <button
            className="theme-button"
            onClick={toggleTheme}
        >
            {theme === "light"
                ? "🌙 Dark Mode"
                : "☀️ Light Mode"}
        </button>
    );
}