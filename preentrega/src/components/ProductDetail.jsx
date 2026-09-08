import { Link, useParams, useLocation } from "react-router-dom";
import styles from "./ProductDetail.module.css";


const ProductDetail = () => {
 
    const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product;
 
if (!product) {
    return (
      <div>
        <p>No se  ha podido cargar el producto, intente nuevamente!</p>
        <Link to="/curso_react/product">
          <button>Volver al listado de Productos</button>
        </Link>
      </div>
    );
  }
 
  return(
    <>
    <h2>Detalles del Producto {id}</h2>
    <ul className={styles.productList}>
        <li key={product.id} className={styles.productListItem}>
            <h2>{product.name}</h2>
            <hr />
            <img src={product.avatar} alt={product.name} width="30%" />
            <p><strong>Descripción: </strong>{product.description}</p>
            <p className={styles.price} >Precio: ${product.price}</p>
            <Link to={`/curso_react/product`}><button>Volver al Listado</button></Link>
        </li>
        
        
    </ul>
    </>
  );
}; export default ProductDetail;

