import styles from "./OrderDetails.module.css";
import { MdOutlineAttachMoney } from "react-icons/md";
import PropTypes from "prop-types";

const OrderDetails = ({ name, size, toppings }) => {
  return (
    <div className={styles.container}>
      <span
        className={styles.orderDetailsLabel}
        data-tip="Overview of the order"
      >
        Order Details
      </span>
      <div className={styles.orderDetailsContainer}>
        <div className={styles.detail}>
          <span>{`${name.firstName} ${name.lastName}`}</span>
        </div>
        <div className={styles.detail}>
          <span>Size: {size}</span>
        </div>
        <div className={styles.detail}>
          <span>Toppings:</span>
          <ul>
            {toppings.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.price}>
          <MdOutlineAttachMoney />
          <span>0.00</span>
        </div>
      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  name: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  toppings: PropTypes.array.isRequired,
};

export default OrderDetails;
