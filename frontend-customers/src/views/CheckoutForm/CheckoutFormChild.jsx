import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

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
            return_url: 'http://localhost:3000/Carrito/CheckoutForm/ConfirmacionPago/',
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