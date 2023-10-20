import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./style.module.css"; // Import css modules stylesheet as styles

export default function Repository() {
  const [newCount, setNewCount] = useState("");

  return (
    <div className="App">
      <h1>Single Repository</h1>
    </div>
  );
}
