import express from "express"
import cors from "cors"
import {
    controladorNuevoArticulo,
    controladorRecuperarArticulos,
    controladorDeleteArticulos
} from "./lib/controllers/articuloControllers.mjs"

import {
    controladorNuevaMarca,
    controladorRecuperarMarcas,
    controladorDeleteMarcas
} from "./lib/controllers/marcaControllers.mjs"

import {
    controladorNuevaFamilia,
    controladorRecuperarFamilias
} from "./lib/controllers/familiaControllers.mjs"

import {
    controladorActualizarDetalleCarrito,
    controladorPostDetalleCarrito,
    controladorDeleteDetalleCarrito
} from "./lib/controllers/detalleCarritoControllers.mjs"

import { 
    controladorRecuperarCarrito,
    controladorFormalizarCarrito,
    webhookController
} from "./lib/controllers/carritoControllers.mjs"

const app = express()
app.use(cors())
app.use(express.json({limit: '4mb'}))


app.post("/api/v1.0/Articulo/", controladorNuevoArticulo)
app.get("/api/v1.0/Articulo/", controladorRecuperarArticulos)
app.delete("/api/v1.0/Articulo/:id", controladorDeleteArticulos)

app.post("/api/v1.0/Marca/", controladorNuevaMarca)
app.get("/api/v1.0/Marca/", controladorRecuperarMarcas)
app.delete("/api/v1.0/Marca/:id", controladorDeleteMarcas)

//El ? al final de :idPadre? => que el parámetro es opcional
app.post("/api/v1.0/Familia/:idPadre?", controladorNuevaFamilia)
app.get("/api/v1.0/Familia/", controladorRecuperarFamilias)

app.get("/api/v1.0/Carrito/Articulos/", controladorRecuperarCarrito)

app.post("/api/v1.0/DetalleCarrito/", controladorPostDetalleCarrito)
app.put("/api/v1.0/DetalleCarrito/", controladorActualizarDetalleCarrito)
app.delete("/api/v1.0/DetalleCarrito/", controladorDeleteDetalleCarrito)

app.put("/api/v1.0/Carrito/", controladorFormalizarCarrito)
app.post('/api/v1.0/webhook/', webhookController)

app.listen( process.env.PORT || 8000, ()=>{
    console.log("Express working...");
})