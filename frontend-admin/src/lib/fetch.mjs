async function recuperarMarcas(callBackDatos=()=>{}) {
    try {
        const respuesta = await fetch("http://localhost:8000/Marca/")
        if (respuesta.ok) {
            const datos = await respuesta.json()
            callBackDatos(datos)
        } else {
            alert("Uuups! No podemos recuperar la lista de marcas. Intentalo de nuevo.")
        }
    } catch (excepcion) {
        console.error(excepcion)
        alert(excepcion)
    }
    }

    export {
        recuperarMarcas
    }