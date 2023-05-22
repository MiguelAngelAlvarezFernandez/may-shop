import { useState, useContext, useEffect } from "react";
import styles from "./CantidadCarrito.module.css"
import { CarritoContext } from "../../App";
import { recuperarCarrito, variarCantidadDetalleCarrito, añadirDetalleCarrito } from "../../lib/fetch.mjs"

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
    // si ! articulo.id in carrito
    if (! (articulo.id in carrito)) 
    // fetch post detallearticulo articulo.id carrito.id articulo.precioBruto
    {
      const nuevoDetalle = {
        precioBruto: articulo.precioBruto, 
        ArticuloId: articulo.id, 
        cantidad: 1,
        CarritoId: carrito.id};
        añadirDetalleCarrito (nuevoDetalle, setDetalleCarrito)
        recuperarCarrito(setCarrito)
    } else {
    // almacenamos respuesta en detallesCarrito
      ++detalleCarrito.cantidad
      await variarCantidadDetalleCarrito(detalleCarrito, manejadorRespuesta)
      recuperarCarrito(setCarrito)
    } 
  }

  async function restaCantidad(){
    --detalleCarrito.cantidad
    // si cantidad < 1
    // fetch delete detalleCarrito
    // recupera carrito
    // return
    await variarCantidadDetalleCarrito(detalleCarrito, manejadorRespuesta)
    recuperarCarrito(setCarrito)
    // TODO fetch update DetalleCarrito y recuperar carrito
    //setCantidad(cantidad>0 ? cantidad-1 : 0) 
  }

  function manejadorRespuesta (respuesta){
    console.log(respuesta)
    }

  function manejadorClickCarrito(){
    if (cantidad > 0 && ! articulo.id in carrito) {
      const nuevoCarrito = {...carrito}
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