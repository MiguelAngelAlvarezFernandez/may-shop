import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
import { FRONTEND_URL } from '../../config.mjs';

function CheckoutFormChild() {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
        return;
        }

        const {error} = await stripe.confirmPayment({
        elements,
        confirmParams: {
            return_url: FRONTEND_URL+'/Carrito/CheckoutForm/ConfirmacionPago/',
        },
        });
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button disabled={!stripe}>Submit</button>
        </form>
        </>
    );
}
  
export default CheckoutFormChild