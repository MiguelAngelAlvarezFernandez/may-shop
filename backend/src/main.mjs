import express from "express"
import cors from "cors"

import { 
    controladorNuevoArticulo,
    controladorNuevaMarca,
    controladorRecuperarMarcas,
    controladorDeleteMarcas,
    controladorNuevaFamilia,
    controladorRecuperarFamilias
} from "./lib/controllers/controllers.mjs"

const app = express()
app.use(cors())
app.use(express.json({limit: '4mb'}))


app.post("/api/v1.0/Articulo/", controladorNuevoArticulo)

app.post("/api/v1.0/Marca/", controladorNuevaMarca)
app.get("/api/v1.0/Marca/", controladorRecuperarMarcas)
app.delete("/api/v1.0/Marca/:id", controladorDeleteMarcas)

//El ? al final de :idPadre? => que el parámetro es opcional
app.post("/api/v1.0/Familia/:idPadre?", controladorNuevaFamilia)
app.get("/api/v1.0/Familia/", controladorRecuperarFamilias)

app.listen( 8000,()=>{
    console.log("Express working...");
})