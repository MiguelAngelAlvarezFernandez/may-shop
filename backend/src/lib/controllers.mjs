import { Articulo, Marca } from "./modelos.mjs"

async function controladorNuevoArticulo(peticion, respuesta) {
    try {
        const nuevoArticulo = await Articulo.create(peticion.body)
        respuesta.status(201).send(nuevoArticulo.toJSON())
    } catch (error) {
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorNuevaMarca(peticion, respuesta) {
    try {
        const nuevaMarca = await Marca.create(peticion.body)
        respuesta.status(201).send(nuevaMarca.toJSON())
    } catch (error) {
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

export {
    controladorNuevoArticulo,
    controladorNuevaMarca
}