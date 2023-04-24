async function recuperarMarcas(setter=()=>{}) {
    try {
        const respuesta = await fetch("http://localhost:8000/api/v1.0/Marca/")
        if (respuesta.ok) {
            const datos = await respuesta.json()
            setter(datos)
        } else {
            alert("Uuups! No podemos recuperar la lista de marcas. Intentalo de nuevo.")
        }
    } catch (excepcion) {
        console.error(excepcion)
        alert("El servidor no está disponible")
    }
    }
    
    async function recuperarFamilias(setter=()=>{}) {
        try {
            const respuesta = await fetch("http://localhost:8000/api/v1.0/Familia/")
            if (respuesta.ok) {
                const datos = await respuesta.json()
                setter(datos)
            } else {
                alert("Uuups! No podemos recuperar la lista de Familias. Intentalo de nuevo.")
            }
        } catch (excepcion) {
            console.error(excepcion)
            alert("El servidor no está disponible")
        }
        }

        async function crearNuevoArticulo(articulo, manejadorResposta=()=>{}) {
            try {
                const articuloJSON = JSON.stringify(articulo)
                const respuesta = await fetch(
                    "http://localhost:8000/api/v1.0/Articulo/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: articuloJSON
                    }
                )
                manejadorResposta(respuesta)
            } catch (excepcion) {
                console.error(excepcion)
                alert(excepcion)
            }
        }

    export {
        recuperarMarcas,
        recuperarFamilias,
        crearNuevoArticulo
    }