import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Updates state whenever the browser size changes.
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Event Listener. Listens for browser resizing.
    window.addEventListener("resize", handleResize);

    // Initialize state immediately
    handleResize();

    // Cleanup function to remove event listener when component unmounts.
    // This prevents memory leaks and ensures that we don't have multiple listeners if the component is re-mounted.
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    // Dependency Array Comment:
    /*
      Empty dependency array means this effect runs only once when the component mounts.
      If omitted, React would run the effect after every render, creating unnecessary event listeners and hurting performance.
    */
  }, []);

  const isMobile = windowSize.width < 768;

  return (
    <div className={isMobile ? "mobile" : "desktop"}>
      <div className="card">
        <h1>{isMobile ? "📱 Mobile View" : "💻 Desktop View"}</h1>

        <p>
          <strong>Width:</strong> {windowSize.width}px
        </p>

        <p>
          <strong>Height:</strong> {windowSize.height}px
        </p>

        <p>
          Current Layout:
          <strong> {isMobile ? "Mobile" : "Desktop"}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;