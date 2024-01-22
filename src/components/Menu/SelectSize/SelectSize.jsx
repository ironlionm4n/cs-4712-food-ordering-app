/* eslint-disable react/prop-types */
import { GiFullPizza } from "react-icons/gi";
import styles from "./SelectSize.module.css";

const SelectSize = ({ size, setSize, name, setName }) => {
  return (
    <div className={styles.container}>
      <>
        <div>
          <h3>Enter Customer First Name:</h3>
          <input
            className={styles.textField}
            placeholder="First Name"
            onChange={(e) => setName(e.target.value, "firstName")}
            value={name.firstName}
          />
        </div>
        <div>
          <h3>Enter Customer Last Name:</h3>
          <input
            className={styles.textField}
            placeholder="Last Name"
            onChange={(e) => setName(e.target.value, "lastName")}
            value={name.lastName}
          />
        </div>
      </>
      <div className={styles.selectSizeHeader}>
        <h2>Select Pizza Size</h2>
        <GiFullPizza style={{ fontSize: "2rem" }} />
      </div>
      <select
        className={styles.sizeSelect}
        value={size}
        onChange={(e) => {
          setSize(e.target.value);
        }}
      >
        <option value="Small">Small - $7</option>
        <option value="Medium">Medium - $14</option>
        <option value="Large">Large - $21</option>
      </select>
    </div>
  );
};

export default SelectSize;
