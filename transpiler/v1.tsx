import React from "react";
import { createRoot } from "react-dom";

type CounterProps = { initialCount?: number };

function Counter({ initialCount = 0 }: CounterProps) {
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
