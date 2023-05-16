import { useState, useContext, useEffect } from "react";
import styles from "./CantidadCarrito.module.css"
import { CarritoContext } from "../../App";
import { aumentarDetalleCarrito, recuperarCarrito } from "../../lib/fetch.mjs"

function CantidadCarrito({articulo}) {

  const[carrito, setCarrito]=useContext(CarritoContext)
  const[cantidad, setCantidad]=useState(0)
  const[mensaje, setMensaje]=useState("")
  const[detalleCarrito, setDetalleCarrito] = useState()

  /*El useEffect permite que la cantidad y mensaje se "mantengan"
  en la vista principal*/
  useEffect(
    ()=>{
      if ( articulo.id in carrito ) 
      {setCantidad(carrito[articulo.id].cantidad);
      setMensaje("Articulo añadido a carrito")}
    },
    [carrito]
  )

  useEffect(
    ()=>{
      setDetalleCarrito(carrito[articulo.id]?.articulo.DetalleCarrito)
    },
    [carrito]
  )

  async function sumaCantidad(){
    ++detalleCarrito.cantidad
    await aumentarDetalleCarrito(detalleCarrito, manejadorRespuesta)
    recuperarCarrito(setCarrito)
  }
  function manejadorRespuesta (respuesta){
    console.log(respuesta)
    }
  

  function restaCantidad(){
    // TODO fetch update DetalleCarrito y recuperar carrito
    setCantidad(cantidad>0 ? cantidad-1 : 0) 
  }

  function manejadorClickCarrito(){
    if (cantidad > 0) {
      const nuevoCarrito = {...carrito}
      if ( ! articulo.id in nuevoCarrito ) {} // TODO fetch añada articulo al carrito y recuperar carrito
      //nuevoCarrito[articulo.id] = { articulo: articulo, cantidad: cantidad }
      //setCarrito(nuevoCarrito)
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