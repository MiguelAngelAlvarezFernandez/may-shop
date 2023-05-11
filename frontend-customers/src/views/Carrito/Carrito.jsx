import { useContext } from "react";
import { CarritoContext } from "../../App";

function Carrito() {

  const[carrito]=useContext(CarritoContext)

    return (
      <>
      <h3>VISTA CARRITO</h3>
      {carrito.map(articuloCarrito =>
      <div>
      <div>{articuloCarrito.cantidad}</div>
      <div>{articuloCarrito.articulo.denominacion}</div>
      <div>{articuloCarrito.articulo.precioBruto}</div>
      <div>{articuloCarrito.cantidad*articuloCarrito.articulo.precioBruto}</div>
      </div>
      )}
      </>
    );
  }
  
  export default Carrito;