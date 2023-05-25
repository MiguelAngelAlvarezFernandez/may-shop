import { useContext } from "react";
import { CarritoContext } from "../../App";
import styles from "./Carrito.module.css"

function Carrito() {

  const[carrito]=useContext(CarritoContext)

    return (
      <>
      <h3>TU CARRITO</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
              <th>Unidades</th>
              <th>Articulo</th>
              <th>Precio</th>
              <th>Importe</th>
          </tr>
        </thead>
          <tbody>
          {Object.values(carrito.articulos).map(articuloCarrito =>
            <tr key={articuloCarrito.articulo.id} className={styles.tableData}>
              <td>{articuloCarrito.cantidad}</td>
              <td>{articuloCarrito.articulo.denominacion}</td>
              <td className={styles.precioBruto}>{articuloCarrito.articulo.precioBruto.toFixed(2)}€</td>
              <td className={styles.importe}>{(articuloCarrito.cantidad*articuloCarrito.articulo.precioBruto).toFixed(2)}€</td>
            </tr>
          )}
          </tbody>
      </table>

      <button>Formalizar Carrito </button>
      </>
    );
  }
  
  export default Carrito;