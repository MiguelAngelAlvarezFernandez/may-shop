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
            const nuevoCarrito={ id: datos.id, articulos: {}}
            datos.Articulos.forEach( 
                articulo => nuevoCarrito.articulos[articulo.id] = 
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

async function variarCantidadDetalleCarrito (detalleCarrito, manejadorRespuesta = ()=>{}) {
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

async function añadirDetalleCarrito(nuevoDetalle, setter=()=>{}) {
    try {
        const nuevoDetalleJSON = JSON.stringify(nuevoDetalle)
        const respuesta = await fetch(
            "http://localhost:8000/api/v1.0/DetalleCarrito/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: nuevoDetalleJSON 
            }
        )
        setter(respuesta)
    } catch (excepcion) {
        manejadorExcepciones(excepcion)
    }
}

async function deleteDetalleCarrito (artToDelete, manejadorRespuesta = ()=>{}) {
    try {
        const detalleJSON = JSON.stringify(artToDelete)
        const respuesta = await fetch (
            `http://localhost:8000/api/v1.0/DetalleCarrito/`,
            {
                method : "DELETE",
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

async function formalizarCarrito (CarritoId, setter = ()=>{}) {
    try {
        const carritoFormalizarJSON = JSON.stringify(CarritoId)
        const respuesta = await fetch (
            `http://localhost:8000/api/v1.0/Carrito/`,
            {
                method : "PUT",
                headers : {
                    "Content-Type": "application/json"
                },  
                body : carritoFormalizarJSON  
            }
        )
        const datos = await respuesta.json()
        setter(datos)
    } catch (excepcion){
        manejadorExcepciones(excepcion)
    }
}

export {
    recuperarArticulos,
    recuperarCarrito,
    variarCantidadDetalleCarrito,
    añadirDetalleCarrito,
    deleteDetalleCarrito,
    formalizarCarrito
}