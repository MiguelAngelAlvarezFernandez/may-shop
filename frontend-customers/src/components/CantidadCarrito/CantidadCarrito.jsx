import { useState, useContext, useEffect } from "react";
import styles from "./CantidadCarrito.module.css"
import { CarritoContext } from "../../App";
import { recuperarCarrito, variarCantidadDetalleCarrito, añadirDetalleCarrito, deleteDetalleCarrito } from "../../lib/fetch.mjs"
import { Link } from "react-router-dom";

function CantidadCarrito({articulo}) {

  const[carrito, setCarrito]=useContext(CarritoContext)
  const[cantidad, setCantidad]=useState(0)
  const[mensaje, setMensaje]=useState("")
  const[detalleCarrito, setDetalleCarrito] = useState()

  /*El useEffect permite que la cantidad y mensaje se "mantengan"
  en la vista principal*/
  useEffect(
    ()=>{
      if ( articulo.id in carrito.articulos ) 
      {setCantidad(carrito.articulos[articulo.id].cantidad);
      setMensaje("Articulo añadido a carrito")}
    },
    [carrito]
  )

  useEffect(
    ()=>{
      setDetalleCarrito(carrito.articulos[articulo.id]?.articulo.DetalleCarrito)
    },
    [carrito]
  )

  //Incluye articulo en detalleCarrito si no estaba, en otro caso aumenta la cantidad.
  async function sumaCantidad(){
    if (! (articulo.id in carrito.articulos)) 
    {
      const nuevoDetalle = {
        precioBruto: articulo.precioBruto, 
        ArticuloId: articulo.id, 
        cantidad: 1,
        CarritoId: carrito.id};
        await añadirDetalleCarrito (nuevoDetalle, setDetalleCarrito)
        recuperarCarrito(setCarrito)
    } else {
      ++detalleCarrito.cantidad
      await variarCantidadDetalleCarrito(detalleCarrito, manejadorRespuesta)
      recuperarCarrito(setCarrito)
    } 
  }

  //Si cantidad es cero => elimina articulo de carrito, en otro caso disminuye cantidad.
  async function restaCantidad(){
    --detalleCarrito.cantidad
    if (detalleCarrito.cantidad===0){
    await deleteDetalleCarrito({ArticuloId: articulo.id, CarritoId: carrito.id}, manejadorRespuesta)
    setCantidad(0)
    setMensaje("")
    recuperarCarrito(setCarrito)
    } else {
    await variarCantidadDetalleCarrito(detalleCarrito, manejadorRespuesta)
    recuperarCarrito(setCarrito)
    }
  }

  function manejadorRespuesta (respuesta){
    //console.log(respuesta)
    }

    return (
    <>
      <div className={styles.contadorCantidad}>
        <Link to={'/Carrito/'}> 
          <button>🛒</button>
        </Link>
        <p> {cantidad} </p>
        <button onClick={restaCantidad}>-</button>
        <button onClick={sumaCantidad}>+</button>
      </div>
      <p>{mensaje}</p>
    </>  
    );
  }

  export default CantidadCarrito;