import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShopCart from "./Cart";
import styles from "./Product.module.css";

const Product = ()=> {
  const [product, setProduct] = useState([]);
  const [Charging, setCharging] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://68f90236deff18f212b85f32.mockapi.io/netsurferlp/product")
      .then((responce) => responce.json())
      .then((data) => {
        setProduct(data);
        setCharging(false);
      })
      .catch((error) => {
        {console.error("Error de carga de API!,", error)}
        setError("Error de Carga de API no se pudieron cargar los productos Intente nuevamente.");
        setCharging(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`El Producto ${product.name} Fue agregado al carrito de compras!`);
  }

  if (Charging) return <p>Cargando productos aguarde por favor...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    <ShopCart cart={cart} setCart={setCart} />
    <ul id="list-product" className={styles.productList}>
      {product.map((product) => (
        <li key={product.id} className={styles.productListItem}>
        <h2>{product.name}</h2>
          <br />
         <img src={product.avatar} alt={product.name} width="50%" />
          <hr />
          <h3 className={styles.price}>Precio: ${product.price}</h3>
          <br />
          
          <Link to={`/curso_react/product/${product.id}`} state={{product}}><button>Detalles del Producto...</button></Link>
          <br />
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </li>
      ))}
    </ul>
    
    </>
  );
}



export default Product