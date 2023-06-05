import { Articulo, Carrito, DetalleCarrito } from "../db/modelsRelationchips.mjs"
import stripeModule from "stripe"
const stripe = stripeModule('sk_test_51NDUBMD806yBceajAUxWNFjv3Q2CMD8Lxd6YSpMC1yzsFSgtsabaZp0bwOwFYOnNb5GyKfsQeAIOZkRRV3rnpMLP001bQTdPZh') 

const endpointSecret = process.env.STRIPE_WH_SECRET; 

//(https://stripe.com/docs/webhooks/quickstart)

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
                return respuesta.status(404).send("Carrito not found")
        
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
                
                const carritoToUpdate = await Carrito.findByPk (peticion.body.CarritoId)
                carritoToUpdate.update ({paymentIntentId: paymentIntent.id})
              
                respuesta.json(paymentIntent.client_secret)
            }
    } catch(error){
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function webhookController (request, response) {
    const sig = request.headers['stripe-signature'];

    //console.log (request.headers)
    // console.log (request.body)
    
    let event;

    try {
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
      response.send();
    
    switch (event.type) {
    case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        console.log (paymentIntentSucceeded)

        const carritoToEnd = await Carrito.findByPk (paymentIntentSucceeded.id)
        carritoToEnd.update ({pedidoFirme: true})

        // Then define and call a function to handle the event payment_intent.succeeded
        break;
    default:
        console.log(`Unhandled event type ${event.type}`);
    }
    
  };
  



export {
    controladorRecuperarCarrito,
    controladorFormalizarCarrito,
    webhookController
}