import React from "react";
import { useCart } from "../context/CartContext";
import styles from "./CartDropdown.module.css";

const CartDropdown = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, totalPrice } =
    useCart();

  return (
    <div className={styles.dropdown}>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.item}>
          <span className={styles.itemName}>{item.name}</span>
          <div className={styles.itemQuanity}>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            {item.quantity}
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
          <span className={styles.itemPrice}>
            {(item.price * item.quantity).toLocaleString()} ₫
          </span>
          <button
            className={styles.removeButton}
            onClick={() => removeFromCart(item.id)}
          >
            ❌
          </button>
        </div>
      ))}
      <hr />
      <div className={styles.total}>
        <div>Tổng cộng:</div>
        <span>{totalPrice.toLocaleString()} ₫</span>
      </div>
      <div className={styles.itemView}>Xem giỏ hàng</div>
    </div>
  );
};

export default CartDropdown;
