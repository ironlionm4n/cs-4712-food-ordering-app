/* eslint-disable react/prop-types */
import { GiFullPizza } from "react-icons/gi";
import styles from "./SelectSize.module.css";

const SelectSize = ({ size, setSize, name, setName }) => {
  return (
    <div className={styles.container}>
      <h3>Enter Customer First Name:</h3>
      <input
        className={styles.textField}
        placeholder="First Name"
        onChange={(e) => setName(e.target.value, "firstName")}
        value={name.firstName}
      />
      <h3>Enter Customer Last Name:</h3>
      <input
        className={styles.textField}
        placeholder="Last Name"
        onChange={(e) => setName(e.target.value, "lastName")}
        value={name.lastName}
      />
      <div className={styles.selectSizeHeader}>
        <h2>Select Pizza Size</h2>
        <GiFullPizza style={{ fontSize: "2rem" }} />
      </div>
      <select
        className={styles.sizeSelect}
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
    </div>
  );
};

export default SelectSize;
