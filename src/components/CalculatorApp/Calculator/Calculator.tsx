import React, { useState } from "react";
import styles from "./Calculator.module.css";
import Display from "../Display/Display";
import Button from "../Button/button";

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [operator, setOperator] = useState("");
  const [resultDisplayed, setResultDisplayed] = useState(false);
  const [expression, setExpression] = useState("");

  const buttons = [
    "7",
    "8",
    "9",
    "÷",
    "4",
    "5",
    "6",
    "×",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "C",
    "+",
    "=",
  ];

  const handleClick = (label: string) => {
    if (!isNaN(Number(label)) || label === ".") {
      // Nếu là số hoặc dấu chấm
      if (label === "." && currentInput.includes(".")) return;
      if (resultDisplayed) {
        setCurrentInput(label);
        setResultDisplayed(false);
      } else {
        setCurrentInput((prev) => prev + label);
      }
    } else if (["+", "-", "×", "÷"].includes(label)) {
      if (currentInput === "") return;
      setOperator(label);
      setFirstValue(currentInput);
      setExpression(`${currentInput} ${label}`);
      setCurrentInput(""); // vẫn giữ để chuẩn bị nhập số tiếp theo
    } else if (label === "=") {
      setExpression(`${firstValue} ${operator} ${currentInput} =`);

      if (!firstValue || !operator || !currentInput) return;
      const a = parseFloat(firstValue);
      const b = parseFloat(currentInput);
      let result = 0;

      switch (operator) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "×":
          result = a * b;
          break;
        case "÷":
          result = b === 0 ? NaN : a / b;
          break;
      }

      setCurrentInput(isNaN(result) ? "Error" : result.toString());
      setFirstValue("");
      setOperator("");
      setResultDisplayed(true);
    } else if (label === "C") {
      setCurrentInput("");
      setFirstValue("");
      setOperator("");
      setResultDisplayed(false);
      setExpression("");
    }
  };
  return (
    <div className={styles.calculator}>
      <div className={styles.expression}>{expression}</div>
      <Display value={currentInput || "0"} />
      <div className={styles.grid}>
        {buttons.map((label) => (
          <Button key={label} label={label} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
