import { MdOutlineAttachMoney } from "react-icons/md";
import styles from "./Price.module.css";
import PropTypes from "prop-types";

const Price = ({ price }) => {
  return (
    <div className={styles.price}>
      <span>Price:</span>
      <MdOutlineAttachMoney />
      <span>{price}</span>
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Price;
