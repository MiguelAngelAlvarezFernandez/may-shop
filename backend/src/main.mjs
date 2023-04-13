import express from "express"
import cors from "cors"

import { 
    controladorNuevoArticulo,
    controladorNuevaMarca
} from "./lib/controllers.mjs"

const app = express()
app.use(cors())
app.use(express.json())


app.post("/Articulo/", controladorNuevoArticulo)

app.post("/Marca/", controladorNuevaMarca)



app.listen( 8000,()=>{
    console.log("Express working...");
})