import { useState, useContext } from "react";
import styles from "./CantidadCarrito.module.css"
import { CarritoContext } from "../../App";

function CantidadCarrito({articulo}) {

  const[cantidad, setCantidad]=useState(0)
  const[carrito, setCarrito]=useContext(CarritoContext)
  const[mensaje, setMensaje]=useState("")

  function sumaCantidad(){
    setCantidad(cantidad+1)
  }

  function restaCantidad(){
    setCantidad(cantidad>0 ? cantidad-1 : 0) 
  }

  function manejadorClickCarrito(){
    if (cantidad > 0) {
      const nuevoCarrito = {...carrito}
      nuevoCarrito[articulo.id] = { articulo: articulo, cantidad: cantidad }
      setCarrito(nuevoCarrito)
      setMensaje("Articulo añadido a carrito")
    } else {
      alert("La cantidad debe de ser mayor que cero")
    }
  }


    return (
    <>
      <div className={styles.contadorCantidad}>
        <button onClick={manejadorClickCarrito}>+🛒</button>
        <p> {cantidad} </p>
        <button onClick={restaCantidad}>-</button>
        <button onClick={sumaCantidad}>+</button>
      </div>
      <p>{mensaje}</p>
    </>  
    );
  }
  
  export default CantidadCarrito;