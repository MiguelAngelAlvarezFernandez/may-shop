import express from "express"
import cors from "cors"

import { 
    controladorNuevoArticulo,
    controladorNuevaMarca,
    controladorRecuperarMarcas,
    controladorDeleteMarcas,
    controladorNuevaFamilia,
    controladorRecuperarFamilias
} from "./lib/controllers.mjs"

const app = express()
app.use(cors())
app.use(express.json())


app.post("/Articulo/", controladorNuevoArticulo)

app.post("/Marca/", controladorNuevaMarca)
app.get("/Marca/", controladorRecuperarMarcas)
app.delete("/Marca/:id", controladorDeleteMarcas)

//El ? al final de :idPadre? => que el parámetro es opcional
app.post("/Familia/:idPadre?", controladorNuevaFamilia)
app.get("/Familia/", controladorRecuperarFamilias)

app.listen( 8000,()=>{
    console.log("Express working...");
})