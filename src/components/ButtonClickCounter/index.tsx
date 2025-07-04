import React, { useState } from "react";
import styles from "./ButtonClickCounter.module.css";

const ButtonClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
};

export default ButtonClickCounter;
