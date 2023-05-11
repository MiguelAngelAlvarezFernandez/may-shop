import { useState, useContext } from "react";
import styles from "./CantidadCarrito.module.css"
import { CarritoContext } from "../../App";

function CantidadCarrito({articulo}) {

  const[cantidad, setCantidad]=useState(0)
  const[carrito, setCarrito]=useContext(CarritoContext)

  function sumaCantidad(){
    setCantidad(cantidad+1)
  }

  function restaCantidad(){
    setCantidad(cantidad>0 ? cantidad-1 : 0) 
  }

  function manejadorClickCarrito(){
    const nuevoArticulo = {articulo}
    const nuevoCarrito=[...carrito]
    nuevoCarrito.push(nuevoArticulo)
    setCarrito([...nuevoCarrito])
  }


    return (
      <div className={styles.contadorCantidad}>
        <button onClick={manejadorClickCarrito}>+🛒</button>
        <p> {cantidad} </p>
        <button onClick={restaCantidad}>-</button>
        <button onClick={sumaCantidad}>+</button>
      </div>
    );
  }
  
  export default CantidadCarrito;