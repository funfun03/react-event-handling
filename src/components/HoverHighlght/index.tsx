import React from "react";
import styles from "./HoverHighlight.module.css";

const HoverHighlight = () => {
  const handleMouseEnter = () => {
    console.log("Mouse entered the component");
    // change the background color
    const highlightElement = document.querySelector(`.${styles.highlight}`);
    if (highlightElement instanceof HTMLElement) {
      highlightElement.style.backgroundColor = "yellow";
    }
  };
  const handleMouseLeave = () => {
    console.log("Mouse left the component");
    // reset the background color
    const highlightElement = document.querySelector(`.${styles.highlight}`);
    if (highlightElement instanceof HTMLElement) {
      highlightElement.style.backgroundColor = "white";
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.highlight}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover Me!
      </div>
    </div>
  );
};

export default HoverHighlight;
