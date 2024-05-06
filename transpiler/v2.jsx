import React from "react";
import { createRoot } from "react-dom";

function Counter({ initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const root = createRoot(document.getElementById("counter"));
root.render(<Counter />);
