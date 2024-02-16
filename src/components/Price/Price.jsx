import { MdOutlineAttachMoney } from "react-icons/md";
import styles from "./Price.module.css";
import PropTypes from "prop-types";

const Price = ({ price, toppings }) => {
  const calculatedPrice = price + toppings.length;
  return (
    <div className={styles.price}>
      <span>Total:</span>
      <MdOutlineAttachMoney />
      <span>{calculatedPrice}</span>
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
  toppings: PropTypes.array.isRequired,
};

export default Price;
