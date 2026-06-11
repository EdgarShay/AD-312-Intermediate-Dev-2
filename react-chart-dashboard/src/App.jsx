import { useState } from "react";
import PollDashboard from "./components/PollDashboard";

function App() {
  const [showDashboard, setShowDashboard] = useState(true);

  return (
    <div>
      <button
        className="toggle-btn"
        onClick={() => setShowDashboard(!showDashboard)}
      >
        {showDashboard
          ? "Unmount Dashboard"
          : "Mount Dashboard"}
      </button>

      {showDashboard && <PollDashboard />}
    </div>
  );
}

export default App;