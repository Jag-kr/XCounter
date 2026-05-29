import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>Counter App</h1>
      </header>
      <section>
        Count: {count}
        <div className="counter-container">
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Increment
          </button>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count - 1)}
          >
            Decrement
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
