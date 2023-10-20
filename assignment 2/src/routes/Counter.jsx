import { useState } from "react";
import { useCount } from "../hooks/useCount";
import { Link } from "react-router-dom";
import "../App.css";

export default function Counter() {
  const { count, increment, decrement, reset, setValue } = useCount();
  const [newCount, setNewCount] = useState("");

  function handleOnChange(e) {
    setNewCount(e.target.value);
    e.target.value = newCount;
  }

  function handleOnClick() {
    setValue(newCount);
    setNewCount("");
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <br />
      <br />
      <input value={newCount} type="number" onChange={handleOnChange} />
      <button onClick={handleOnClick}>Set count value</button>
      <br />
      <br />
      <Link to="/"> Back to Homepage</Link>
    </div>
  );
}
