import { Articulo, Carrito, DetalleCarrito } from "../db/modelsRelationchips.mjs"
import stripeModule from "stripe"
const stripe = stripeModule('sk_test_51NDUBMD806yBceajAUxWNFjv3Q2CMD8Lxd6YSpMC1yzsFSgtsabaZp0bwOwFYOnNb5GyKfsQeAIOZkRRV3rnpMLP001bQTdPZh') 

const endpointSecret = "whsec_8a7b960eb011a8b0f929a7e4acb170514ebf9be10898169d0743eb8893c80e01"; 

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

async function webhookController (request, response) {
    const sig = request.headers['stripe-signature'];

    console.log (request.headers)
    console.log (request.body)
    
    // let event;

    // try {
    //     event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    //   } catch (err) {
    //     response.status(400).send(`Webhook Error: ${err.message}`);
    //     return;
    //   }
    
    //   // Handle the event
    //   console.log(`Unhandled event type ${event.type}`);
    
    //   // Return a 200 response to acknowledge receipt of the event
     response.send();
  };
  



export {
    controladorRecuperarCarrito,
    controladorFormalizarCarrito,
    webhookController
}