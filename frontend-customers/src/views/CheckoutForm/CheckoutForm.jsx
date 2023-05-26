import { useEffect, useState, useContext } from "react";
import { formalizarCarrito } from "../../lib/fetch.mjs";
import { CarritoContext } from "../../App";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_Dt4ZBItXSZT1EzmOd8yCxonL');

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
            <form>
              <PaymentElement />
              <button>Submit</button>
            </form>
          </Elements>
        }
      </>
    );
  }
  
  export default CheckoutForm