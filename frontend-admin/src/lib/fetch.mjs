import manejadorExcepciones from "./manejadorExcepciones.mjs"
import { BACKEND_URL } from "../config.mjs"

async function recuperarMarcas(setter=()=>{}) {
    try {
        const respuesta = await fetch(BACKEND_URL+"/api/v1.0/Marca/")
        if (respuesta.ok) {
            const datos = await respuesta.json()
            setter(datos)
        } else {
            alert("Uuups! No podemos recuperar la lista de marcas. Intentalo de nuevo.")
        }
    } catch (excepcion) {
        manejadorExcepciones(excepcion)
    }
    }
    
    async function recuperarFamilias(setter=()=>{}) {
        try {
            const respuesta = await fetch(BACKEND_URL+"/api/v1.0/Familia/")
            if (respuesta.ok) {
                const datos = await respuesta.json()
                setter(datos)
            } else {
                alert("Uuups! No podemos recuperar la lista de Familias. Intentalo de nuevo.")
            }
        } catch (excepcion) {
            manejadorExcepciones(excepcion)
        }
        }

        async function crearNuevoArticulo(articulo, manejadorRespuesta=()=>{}) {
            try {
                const articuloJSON = JSON.stringify(articulo)
                const respuesta = await fetch(
                    BACKEND_URL+"/api/v1.0/Articulo/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: articuloJSON
                    }
                )
                manejadorRespuesta(respuesta)
            } catch (excepcion) {
                manejadorExcepciones(excepcion)
            }
        }

        async function crearNuevaMarca (nombre, manejadorRespuesta = ()=>{}) {
            try {
                const marcaJSON = JSON.stringify(nombre)
                const respuesta = await fetch (
                    BACKEND_URL+"/api/v1.0/Marca/",
                    {
                        method : "POST",
                        headers : {
                            "Content-Type": "application/json"
                        },  
                        body : marcaJSON  
                    }
                )
                manejadorRespuesta(respuesta)
            } catch (excepcion){
                manejadorExcepciones(excepcion)
            }
        }

        async function crearNuevaFamilia (nombre, idPadre, manejadorRespuesta = ()=>{}) {
            try {
                const familiaJSON = JSON.stringify({nombre})
                const respuesta = await fetch (
                    BACKEND_URL+`/api/v1.0/Familia/${idPadre}`,
                    {
                        method : "POST",
                        headers : {
                            "Content-Type": "application/json"
                        },  
                        body : familiaJSON  
                    }
                )
                manejadorRespuesta(respuesta)
            } catch (excepcion){
                manejadorExcepciones(excepcion)
            }
        }

    export {
        recuperarMarcas,
        recuperarFamilias,
        crearNuevoArticulo,
        crearNuevaMarca,
        crearNuevaFamilia
    }