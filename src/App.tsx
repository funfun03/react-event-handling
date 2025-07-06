import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonClickCounter from "./components/ButtonClickCounter";
import InputFieldTracker from "./components/InputFieldTracker";
import ToggleSwitch from "./components/ToggleSwitch";
import HoverHighlight from "./components/HoverHighlght";
import FormSubmissionAlert from "./components/FormSubmissionAlert";
import KeyPressDisplay from "./components/KeyPressDisplay";
import DoubleClickMessage from "./components/DoubleClickMessage";
import DropdownSelection from "./components/DropdownSelection";
import CheckboxToggle from "./components/CheckboxToggle";
import SearchFilter from "./components/SearchFilter";
import CalculatorApp from "./components/CalculatorApp/Calculator/Calculator";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";

function App() {
  return (
    <div>
      <div className="Ex1">
        <ButtonClickCounter />
      </div>

      <div className="Ex2">
        <InputFieldTracker />
      </div>

      <div className="Ex3">
        <ToggleSwitch />
      </div>

      <div className="Ex4">
        <HoverHighlight />
      </div>

      <div className="Ex5">
        <FormSubmissionAlert />
      </div>

      <div className="Ex6">
        <KeyPressDisplay />
      </div>

      <div className="Ex7">
        <DoubleClickMessage />
      </div>

      <div className="Ex8">
        <DropdownSelection />
      </div>

      <div className="Ex9">
        <CheckboxToggle />
      </div>

      <div className="Ex10">
        <SearchFilter />
      </div>

      <div className="Calculator">
        <CalculatorApp />
      </div>

      <div className="RegistrationForm">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;
