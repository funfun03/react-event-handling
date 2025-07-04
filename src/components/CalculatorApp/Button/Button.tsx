import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  onClick: (label: string) => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  const isOperator = ["+", "-", "×", "÷", "="].includes(label);
  const isClear = label === "C";
  const buttonClass = `
  ${styles.button} 
  ${isOperator ? styles.operator : ""} 
  ${isClear ? styles.clear : ""}
`;

  return (
    <button className={styles.button} onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
