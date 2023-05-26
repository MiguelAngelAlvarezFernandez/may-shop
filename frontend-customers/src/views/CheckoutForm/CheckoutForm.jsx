import { useEffect, useState, useContext } from "react";
import { formalizarCarrito } from "../../lib/fetch.mjs";
import { CarritoContext } from "../../App";

function CheckoutForm() {

  const[carrito]=useContext(CarritoContext)
  const [secreto, setSecreto] = useState("")

  useEffect(
    ()=>{formalizarCarrito({CarritoId: carrito.id}, setSecreto)}
    ,[]
  )

    return (
      <>
        <p>No lo cuentes esto es un secreto: {secreto}</p>
      </>
    );
  }
  
  export default CheckoutForm