import { useEffect, useState, useContext } from "react";
import { formalizarCarrito } from "../../lib/fetch.mjs";
import { CarritoContext } from "../../App";

function CheckoutForm() {

  const[carrito]=useContext(CarritoContext)
  const [secreto, setSecreto] = useState("")

  useEffect(
    ()=>{formalizarCarrito(carrito.id, setSecreto)}
    ,[]
  )

    return (
      <>
        <p>Hola, soy la vista formulario {secreto}</p>
      </>
    );
  }
  
  export default CheckoutForm