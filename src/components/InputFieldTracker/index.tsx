import React, { useState } from "react";
import styles from "./InputFieldTracker.module.css";

const InputFieldTracker = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <p>
        {inputValue === "" ? "You typed nothing" : `You typed: ${inputValue}`}
      </p>
    </div>
  );
};

export default InputFieldTracker;
