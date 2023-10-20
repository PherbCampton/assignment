import { useState } from "react";

import styles from "./style.module.css"; // Import css modules stylesheet as styles

export default function Repositories() {
  const [newCount, setNewCount] = useState("");

  return (
    <div className="App">
      <h1>All Repositories</h1>
    </div>
  );
}
