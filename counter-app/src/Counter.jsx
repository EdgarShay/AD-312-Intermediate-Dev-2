import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  // +1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // +1 after delay
  const handleIncrementDelay = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 2000);
  };

  // ❌ wrong batching example
  const handleIncrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  // ✅ correct batching fix
  const handleCorrectIncrementTwice = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="container">
      <h1 className="title">React Counter</h1>
      <div className="count">{count}</div>

      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementDelay}>
          Increment After Delay
        </button>
        <button onClick={handleIncrementTwice}>
          Increment Twice (Wrong)
        </button>
        <button onClick={handleCorrectIncrementTwice}>
          Correct Increment Twice
        </button>
      </div>
    </div>
  );
}

export default Counter;