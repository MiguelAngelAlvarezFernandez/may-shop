import { useContext } from "react";
import { CarritoContext } from "../../App";
import styles from "./Carrito.module.css"

function Carrito() {

  const[carrito]=useContext(CarritoContext)

    return (
      <>
      <h3>TU CARRITO</h3>
      <table className={styles.table}>
        <tr className={styles.tableHeader}>
            <th>Unidades</th>
            <th>Articulo</th>
            <th>Precio</th>
            <th>Importe</th>
        </tr>
          {carrito.map(articuloCarrito =>
          <tr className={styles.tableData}>
            <td>{articuloCarrito.cantidad}</td>
            <td>{articuloCarrito.articulo.denominacion}</td>
            <td className={styles.precioBruto}>{articuloCarrito.articulo.precioBruto}€</td>
            <td className={styles.importe}>{articuloCarrito.cantidad*articuloCarrito.articulo.precioBruto}€</td>
          </tr>
          )}
      </table>
      </>
    );
  }
  
  export default Carrito;