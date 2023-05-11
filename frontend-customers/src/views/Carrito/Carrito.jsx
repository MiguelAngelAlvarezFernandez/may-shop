import { useContext, useState } from "react";
import { CarritoContext } from "../../App";

function Carrito() {

  const[carrito]=useContext(CarritoContext)
  const[totalArticulo, setTotalArticulo]=useState("")

    return (
      <>
      <h3>VISTA CARRITO</h3>
      {carrito.map(articuloCarrito =>
      <div>
      <div>{articuloCarrito.cantidad}</div>
      <div>{articuloCarrito.articulo.denominacion}</div>
      <div>{articuloCarrito.articulo.precioBruto}</div>
      </div>
      )}
      </>
    );
  }
  
  export default Carrito;