import styles from "./Toppings.module.css";
import PropTypes from "prop-types";

const Item = ({ name, setToppings }) => {
  return (
    <li>
      <input
        type="checkbox"
        id={name}
        name={name}
        onChange={(e) => setToppings(e.target.value, name)}
      />
      <label htmlFor={name}>{name}</label>
    </li>
  );
};

const Toppings = ({ setToppings }) => {
  const toppings = [
    "Pepperoni",
    "Sausage",
    "Onions",
    "Peppers",
    "Pineapple",
    "Ham",
    "Spinach",
    "Artichokes",
    "Mushrooms",
    "Anchovies",
    "Bacon",
    "Chicken",
    "Tomatoes",
    "Olives",
    "Basil",
  ];
  return (
    // list of toppings to select from
    <div className={styles.toppingsContainer}>
      <h2>Select Toppings</h2>
      <form>
        <fieldset>
          <legend>Toppings</legend>
          <ul className={styles.toppingsList}>
            {toppings.map((topping) => (
              <Item key={topping} name={topping} setToppings={setToppings} />
            ))}
          </ul>
        </fieldset>
      </form>
    </div>
  );
};

Toppings.propTypes = {
  setToppings: PropTypes.func.isRequired,
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  setToppings: PropTypes.func.isRequired,
};

export default Toppings;
