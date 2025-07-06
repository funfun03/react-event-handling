import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CartDropdown from "./CartDropdown";
import styles from "./CartIcon.module.css";

const CartIcon = () => {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.cartWrapper}>
      <button className={styles.icon} onClick={() => setOpen(!open)}>
        🛒 <span>Giỏ hàng của bạn ({totalItems}) sản phẩm</span>
      </button>
      {open && <CartDropdown />}
    </div>
  );
};

export default CartIcon;
