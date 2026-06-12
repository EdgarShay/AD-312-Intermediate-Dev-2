import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    // Toggle between "light" and "dark" themes
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <div className="card">
        <h1>Theme Preference App</h1>

        <h2>{theme.toUpperCase()} MODE</h2>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
}

export default App;