import styles from "./Header.module.css"
import logoMayShop from "../Header/Imagenes/logoMayShop.png"
import carritoCompra from "../Header/Imagenes/carritoCompra.png"
import { Link } from "react-router-dom";


function Header() {
    return (
      <header className={styles.header}>
        <img className={styles.logoMayShop} src={logoMayShop} alt="Logo May Beauty Shop"/>
        <h1 className={styles.title}>MAY BEAUTY SHOP</h1>
        <div className={styles.containerCarrito}>
          <div className={styles.contadorCarrito}>0</div>
          <Link to={'/Carrito/'}> 
            <img className={styles.carritoCompra} src={carritoCompra} alt="Carrito Compra"/>
            </Link>
        </div>
      </header>
    );
  }
  
  export default Header;