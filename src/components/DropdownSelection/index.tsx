import React from "react";
import styles from "./DropdownSelection.module.css";

const DropdownSelection = () => {
  const dropdownList = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
  ];
  const [selectedItem, setSelectedItem] = React.useState(dropdownList[0]);
  return (
    <div className={styles.container}>
      <select
        value={selectedItem.id}
        onChange={(e) => {
          const selectedId = parseInt(e.target.value);
          const item = dropdownList.find((item) => item.id === selectedId);
          if (item) {
            setSelectedItem(item);
          }
        }}
      >
        {dropdownList.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <p>Selected Item: {selectedItem.name}</p>
    </div>
  );
};

export default DropdownSelection;
