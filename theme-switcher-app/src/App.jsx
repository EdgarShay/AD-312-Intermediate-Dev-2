import { useContext } from "react";

import { ThemeContext } from "./ThemeContext";

import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {

  const { theme } =
    useContext(ThemeContext);

  return (
    <div
      className={
        theme === "dark"
          ? "dark-mode"
          : "light-mode"
      }
    >
      <div className="container">

        <ThemeSwitcher />

        <h1>Global Theme Switcher</h1>

        <p>
          This application demonstrates the
          React Context API by managing
          global theme state across the
          application.
        </p>

        <div className="card">
          <h2>Context API</h2>

          <p>
            The Context API allows global
            state sharing without prop
            drilling.
          </p>
        </div>

      </div>
    </div>
  );
}

export default App;