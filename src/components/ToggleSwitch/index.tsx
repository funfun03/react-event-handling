import React from "react";
import styles from "./ToggleSwitch.module.css";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <div className={styles.container}>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Turn Off" : "Turn On"}
      </button>
      <p>{isOn ? "State: On" : "State: Off"}</p>
    </div>
  );
};

export default ToggleSwitch;
