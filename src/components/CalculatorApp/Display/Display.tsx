import React from "react";
import styles from "./Display.module.css";

type DisplayProps = {
  value: string;
};

const Display = ({ value }: DisplayProps) => {
  return (
    <div className={styles.display}>
      <p>{value}</p>
    </div>
  );
};

export default Display;
