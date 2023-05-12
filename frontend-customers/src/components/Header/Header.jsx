import styles from "./Header.module.css"
import logoMayShop from "../Header/Imagenes/logoMayShop.png"
import carritoCompra from "../Header/Imagenes/carritoCompra.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../../App";

function Header() {

  const[carrito]=useContext(CarritoContext)

    return (
      <header className={styles.header}>
        <img className={styles.logoMayShop} src={logoMayShop} alt="Logo May Beauty Shop"/>
        <h1 className={styles.title}>MAY BEAUTY SHOP</h1>
        <div className={styles.containerCarrito}>
          <div className={styles.contadorCarrito}>{carrito.length>0 ? carrito.length : 0}</div>
          <Link to={'/Carrito/'}> 
            <img className={styles.carritoCompra} src={carritoCompra} alt="Carrito Compra"/>
            </Link>
        </div>
      </header>
    );
  }
  
  export default Header;