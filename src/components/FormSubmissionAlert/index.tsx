import React from "react";
import styles from "./FormSubmissionAlert.module.css";

const FormSubmissionAlert = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    alert(`You submitted ${inputValue}`);
    // clear the input field
    (event.currentTarget.elements[0] as HTMLInputElement).value = "";
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter something... " />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSubmissionAlert;
