import { useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import SelectSize from "./SelectSize/SelectSize";
import Toppings from "./Toppings/Toppings";
import styles from "./Menu.module.css";

const Menu = () => {
  const [size, setSize] = useState("Small");
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [toppings, setToppings] = useState([]);
  const [price, setPrice] = useState(7);

  const handleSetSizePrice = (value) => {
    setPrice(value);
  };

  const handleSetToppingPrice = (value) => {
    setPrice((prevValue) => prevValue + value);
  };

  const handleSetSize = (value) => {
    console.log(value);
    setSize(value);
    if (value === "Small") handleSetSizePrice(7);
    if (value === "Medium") handleSetSizePrice(14);
    if (value === "Large") handleSetSizePrice(21);
  };

  const handleSetName = (value, field) => {
    setName({ ...name, [field]: value });
  };

  const handleSetToppings = (value, name) => {
    console.log(name, value);
    if (value) {
      setToppings((prevValue) => [...prevValue, name]);
      handleSetToppingPrice(1);
      return;
    } else {
      setToppings((prevValue) => prevValue.filter((item) => item !== name));
      handleSetToppingPrice(-1);
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
          setSizePrice={handleSetSizePrice}
        />
        <Toppings setToppings={handleSetToppings} />
        <OrderDetails
          name={name}
          size={size}
          toppings={toppings}
          price={price}
        />
      </div>
    </div>
  );
};

export default Menu;
