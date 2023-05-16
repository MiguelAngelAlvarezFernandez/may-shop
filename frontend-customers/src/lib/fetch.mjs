import manejadorExcepciones from "./manejadorExcepciones.mjs"

async function recuperarArticulos(setter=()=>{}) {
    try {
        const respuesta = await fetch("http://localhost:8000/api/v1.0/Articulo/")
        if (respuesta.ok) {
            const datos = await respuesta.json()
            setter(datos)
        } else {
            alert("Uuups! No podemos recuperar la lista de articulos. Intentalo de nuevo.")
        }
    } catch (excepcion) {
        manejadorExcepciones(excepcion)
    }
}

async function recuperarCarrito(setter=()=>{}) {
    try {
        const respuesta = await fetch("http://localhost:8000/api/v1.0/Carrito/Articulos/")
        if (respuesta.ok) {
            const datos = await respuesta.json()
            const nuevoCarrito={}
            datos.Articulos.forEach( 
                articulo => nuevoCarrito[articulo.id] = 
                { articulo, cantidad: articulo.DetalleCarrito.cantidad } 
                )
            setter(nuevoCarrito)
        } else {
            alert("Uuups! No podemos recuperar tu carrito")
        }
    } catch (excepcion) {
        manejadorExcepciones(excepcion)
    }
}

async function aumentarDetalleCarrito (detalleCarrito, manejadorRespuesta = ()=>{}) {
    try {
        const detalleJSON = JSON.stringify(detalleCarrito)
        const respuesta = await fetch (
            `http://localhost:8000/api/v1.0/DetalleCarrito/`,
            {
                method : "PUT",
                headers : {
                    "Content-Type": "application/json"
                },  
                body : detalleJSON  
            }
        )
        manejadorRespuesta(respuesta)
    } catch (excepcion){
        manejadorExcepciones(excepcion)
    }
}

export {
    recuperarArticulos,
    recuperarCarrito,
    aumentarDetalleCarrito
}