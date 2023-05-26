import { Articulo, Carrito, DetalleCarrito } from "../db/modelsRelationchips.mjs"
import stripeModule from "stripe"
const stripe = stripeModule('sk_test_CGGvfNiIPwLXiDwaOfZ3oX6Y') 

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

export {
    controladorRecuperarCarrito,
    controladorFormalizarCarrito
}