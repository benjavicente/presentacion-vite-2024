import * as React from "react";
import { createRoot } from "react-dom";

const jsx = React.createElement;

function Counter({ initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);

  return (
    jsx("div", null,
      jsx("p", null, "Count: ", count),
      jsx("button", { onClick: () => setCount(count + 1) }, "Increment")
    )
  );
}

const root = createRoot(document.getElementById("counter"));
root.render(jsx(Counter, null));
