import React from "react";
import styles from "./CheckboxToggle.module.css";

const CheckboxToggle = () => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <div className={styles.container}>
      <label htmlFor="checkbox" className={styles.label}>
        <input
          type="checkbox"
          id="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        Toggle me
      </label>
      <p>{isChecked ? "Checkbox is checked" : "Checkbox is unchecked"}</p>
    </div>
  );
};

export default CheckboxToggle;
