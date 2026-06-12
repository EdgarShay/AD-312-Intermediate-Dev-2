import "./App.css";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  // Use the custom hook to get the current window size 
  const { width, height } = useWindowSize();

  const isMobile = width < 768;

  return (
    <div className={isMobile ? "mobile" : "desktop"}>
      <div className="card">
        <h1>
          {isMobile
            ? "📱 Mobile Streaming Layout"
            : "💻 Desktop Streaming Layout"}
        </h1>

        <p>Width: {width}px</p>
        <p>Height: {height}px</p>

        <p>
          Current Mode:
          <strong> {isMobile ? "Mobile" : "Desktop"}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;