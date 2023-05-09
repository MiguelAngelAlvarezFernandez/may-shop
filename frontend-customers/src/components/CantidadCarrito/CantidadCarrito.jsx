import { useState } from "react";
import styles from "./CantidadCarrito.module.css"

function CantidadCarrito({articulo}) {

  const[cantidad, setCantidad]=useState(0)

  function sumaCantidad(){
    setCantidad(cantidad+1)
  }

  function restaCantidad(){
    setCantidad(cantidad>0 ? cantidad-1 : 0) 
  }

    return (
      <div className={styles.contadorCantidad}>
        <button>+🛒</button>
        <p> {cantidad} </p>
        <button onClick={restaCantidad}>-</button>
        <button onClick={sumaCantidad}>+</button>
      </div>
    );
  }
  
  export default CantidadCarrito;