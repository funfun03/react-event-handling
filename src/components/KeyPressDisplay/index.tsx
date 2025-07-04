import React from "react";
import styles from "./KeyPressDisplay.module.css";

const KeyPressDisplay = () => {
  const [key, setKey] = React.useState("");
  return (
    <div className={styles.container}>
      <input type="text" onKeyDown={(e) => setKey(e.key)} />
      <p>Last pressed key: {key}</p>
    </div>
  );
};

export default KeyPressDisplay;
