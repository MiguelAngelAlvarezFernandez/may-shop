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

const jsonMiddleware = express.json()
const bigJsonMiddleware = express.json({limit: '4mb'})
const rawMiddleware = express.raw({type: 'application/json'})

app.post("/api/v1.0/Articulo/", bigJsonMiddleware, controladorNuevoArticulo)
app.get("/api/v1.0/Articulo/", controladorRecuperarArticulos)
app.delete("/api/v1.0/Articulo/:id", jsonMiddleware, controladorDeleteArticulos)

app.post("/api/v1.0/Marca/", jsonMiddleware, controladorNuevaMarca)
app.get("/api/v1.0/Marca/", controladorRecuperarMarcas)
app.delete("/api/v1.0/Marca/:id", jsonMiddleware, controladorDeleteMarcas)

//El ? al final de :idPadre? => que el parámetro es opcional
app.post("/api/v1.0/Familia/:idPadre?", jsonMiddleware, controladorNuevaFamilia)
app.get("/api/v1.0/Familia/", controladorRecuperarFamilias)

app.get("/api/v1.0/Carrito/Articulos/", controladorRecuperarCarrito)

app.post("/api/v1.0/DetalleCarrito/", jsonMiddleware, controladorPostDetalleCarrito)
app.put("/api/v1.0/DetalleCarrito/", jsonMiddleware, controladorActualizarDetalleCarrito)
app.delete("/api/v1.0/DetalleCarrito/", jsonMiddleware, controladorDeleteDetalleCarrito)

app.put("/api/v1.0/Carrito/", jsonMiddleware, controladorFormalizarCarrito)
app.post('/api/v1.0/webhook/', rawMiddleware, webhookController)

app.listen( process.env.PORT || 8000, ()=>{
    console.log("Express working...");
})