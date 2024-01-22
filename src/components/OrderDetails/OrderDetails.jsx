import styles from "./OrderDetails.module.css";
import PropTypes from "prop-types";
import Price from "../Price/Price";

const OrderDetails = ({ name, size, toppings, price }) => {
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
          <span>Name:</span>
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
      </div>
      <Price price={price} />
    </div>
  );
};

OrderDetails.propTypes = {
  name: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  toppings: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
};

export default OrderDetails;
