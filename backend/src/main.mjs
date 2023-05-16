import express from "express"
import cors from "cors"

import { 
    controladorNuevoArticulo,
    controladorDeleteArticulos,
    controladorNuevaMarca,
    controladorRecuperarMarcas,
    controladorDeleteMarcas,
    controladorNuevaFamilia,
    controladorRecuperarFamilias,
    controladorRecuperarArticulos,
    controladorRecuperarCarrito,
    controladorActualizarDetalleCarrito
} from "./lib/controllers/controllers.mjs"

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

app.put("/api/v1.0/DetalleCarrito/", controladorActualizarDetalleCarrito)

app.listen( 8000,()=>{
    console.log("Express working...");
})