import React from "react";
import styles from "./SearchFilter.module.css";

const SearchFilter = () => {
  const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul className={styles.list}>
        {items
          .filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((filteredItem) => (
            <li key={filteredItem}>{filteredItem}</li>
          ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
