import React, { useState } from "react";
import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setQuantity(1);
  };

  return (
    <div className={styles.card}>
      <div className={styles.productContainer}>
        <img className={styles.productImage} src={product.image} alt="" />
        <h4 className={styles.productName}>{product.name}</h4>
      </div>
      <p>{product.price.toLocaleString()} ₫</p>
      <div className={styles.controls}>
        <div
          className={styles.controlsLeft}
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          -
        </div>
        <span>{quantity}</span>
        <div
          className={styles.controlsRight}
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </div>
      </div>
      <button onClick={handleAdd}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductCard;
