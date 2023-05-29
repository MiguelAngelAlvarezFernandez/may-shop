import { Articulo, Carrito, DetalleCarrito } from "../db/modelsRelationchips.mjs"
import stripeModule from "stripe"
const stripe = stripeModule('sk_test_CGGvfNiIPwLXiDwaOfZ3oX6Y') 
// const endpointSecret = 'whsec_...'; (https://stripe.com/docs/webhooks/quickstart)

async function controladorRecuperarCarrito (_, respuesta){
    try {
        const [carrito] = await Carrito.findOrCreate 
        ({where: {pedidoFirme: false},
        include: [Articulo]}
        )
        respuesta.json(carrito)
    } catch (error){
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorFormalizarCarrito(peticion, respuesta){
    try{ 
        const CarritoAFormalizar = await DetalleCarrito.findAll({ 
            where: { CarritoId: peticion.body.CarritoId} })
            if (! CarritoAFormalizar) {
                respuesta.status(404).send("Carrito not found")
        
            }
            else {
                const totalPagar = CarritoAFormalizar.reduce(
                (total, articulo)=>{ 
                    return (articulo.cantidad*articulo.precioBruto)+total 
                },0);

                const paymentIntent = await stripe.paymentIntents.create({
                    amount: Math.round(totalPagar*100),
                    currency: 'eur',
                    automatic_payment_methods: {
                      enabled: true,
                    },
                  });

                respuesta.json(paymentIntent.client_secret)
            }
    } catch(error){
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

// async function webhookController (request, response) => {
//     let event = request.body;
//     // Verify the event if you have an endpoint secret defined.
//     if (endpointSecret) {
//       // Get the signature sent by Stripe
//       const signature = request.headers['stripe-signature'];
//       try {
//         event = stripe.webhooks.constructEvent(
//           request.body,
//           signature,
//           endpointSecret
//         );
//       } catch (err) {
//         console.log(`⚠️  Webhook signature verification failed.`, err.message);
//         return response.sendStatus(400);
//       }
//     }
  
//     // Handle the event
//     switch (event.type) {
//       case 'payment_intent.succeeded':
//         const paymentIntent = event.data.object;
//         console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
//         // Then define and call a method to handle the successful payment intent.
//         // handlePaymentIntentSucceeded(paymentIntent);
//         break;
//       case 'payment_method.attached':
//         const paymentMethod = event.data.object;
//         // Then define and call a method to handle the successful attachment of a PaymentMethod.
//         // handlePaymentMethodAttached(paymentMethod);
//         break;
//       default:
//         // Unexpected event type
//         console.log(`Unhandled event type ${event.type}.`);
//     }
  
//     // Return a 200 response to acknowledge receipt of the event
//     response.send();
//   });



export {
    controladorRecuperarCarrito,
    controladorFormalizarCarrito,
    // webhookController
}