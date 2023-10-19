import { useState } from "react";

function ErrorTest() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw new Error("Oh... wow, there is an error somewhere in the react tree");
  }
  return (
    <div>
      <h2>You can test our Error Boundary here</h2>
      <button onClick={() => setHasError(true)}>ErrorBoundary test</button>
    </div>
  );
}

export default ErrorTest;
