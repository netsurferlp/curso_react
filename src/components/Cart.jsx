import React from 'react';
import styles from './Cart.module.css';

const ShopCart = ({ cart, setCart }) => {
  const EmptyCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className={styles.cart}>
      <hr />
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className={styles.cartItem} key={item.id}>
             <img src={item.avatar} alt={item.name} width="5%" /> - {item.name} - ${Number(item.price).toFixed(2)}
            </div>
          ))}

          <div className={styles.price}>
            <hr />
            Total: ${Number(total).toFixed(2)}
          </div>

          <button onClick={EmptyCart}>
            Vaciar el Carrito
          </button>
        </>
      )}
    </div>
  );
}


export default ShopCart