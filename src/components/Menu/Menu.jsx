import { useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import SelectSize from "./SelectSize/SelectSize";
import Toppings from "./Toppings/Toppings";
import styles from "./Menu.module.css";

const Menu = () => {
  const [size, setSize] = useState("Small");
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [toppings, setToppings] = useState([]);

  const handleSetSize = (value) => {
    console.log(value);
    setSize(value);
  };

  const handleSetName = (value, field) => {
    setName({ ...name, [field]: value });
  };

  const handleSetToppings = (value, name) => {
    if (value === "on") {
      setToppings((prevValue) => [...prevValue, name]);
      return;
    } else {
      setToppings((prevValue) => prevValue.filter((item) => item !== name));
    }
  };

  return (
    <div className={styles.menuContainer}>
      <h1>Create Custom Pizza</h1>
      <div className={styles.innerMenuContainer}>
        <SelectSize
          size={size}
          setSize={handleSetSize}
          name={name}
          setName={handleSetName}
        />
        <Toppings setToppings={handleSetToppings} />
        <OrderDetails name={name} size={size} toppings={toppings} />
      </div>
    </div>
  );
};

export default Menu;
