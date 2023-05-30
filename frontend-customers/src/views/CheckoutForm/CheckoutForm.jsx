import { useEffect, useState, useContext } from "react";
import { formalizarCarrito } from "../../lib/fetch.mjs";
import { CarritoContext } from "../../App";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutFormChild from "./CheckoutFormChild.jsx";

const stripePromise = loadStripe('pk_test_51NDUBMD806yBceaj4djrTgYHQaynb7eViVdTrVg9xFazJXvrOuZhQFQbiq8UGCcjjW5Fs7bL7t7MUffmnGNMMqWp00pREUV0uJ');

function CheckoutForm() {

  const[carrito]=useContext(CarritoContext)
  const [secreto, setSecreto] = useState("")

  useEffect(
    ()=>{formalizarCarrito({CarritoId: carrito.id}, setSecreto)}
    ,[]
  )

    return (
      <>
        {
        secreto && 
          <Elements stripe={stripePromise} options={{
          clientSecret: secreto,
          appearance: {},
           }}>
            <CheckoutFormChild/>
          </Elements>
        }
      </>
    );
  }
  
  export default CheckoutForm