import express from "express"
import cors from "cors"
import { Articulo } from "./lib/modelos.mjs";

const app = express()
app.use(cors())
app.use(express.json())


app.post("/Articulo/", async function controladorNuevoArticulo(peticion, respuesta) {
    try {
        const nuevoArticulo = await Articulo.create(peticion.body)
        respuesta.status(201).send(nuevoArticulo.toJSON())
    } catch (error) {
        respuesta.status(500)
        respuesta.send('Error.')
    }
})



app.listen( 8000,()=>{
    console.log("Express working...");
})