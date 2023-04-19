import { Articulo, Marca } from "./db/modelsRelationchips.mjs"

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

async function controladorRecuperarMarcas(_, respuesta) {
    try {
        respuesta.json(await Marca.findAll())
    } catch (error) {
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorDeleteMarcas (peticion, respuesta) {
    try{
        const marcaToDelete = await Marca.findByPk(peticion.params.id)
        if (! marcaToDelete) {respuesta.status(404).send("Marca not found")}
        else {
            marcaToDelete.destroy()
            respuesta.status(200).send("Marca borrada")
        }
    }
    catch(error){
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

export {
    controladorNuevoArticulo,
    controladorNuevaMarca,
    controladorRecuperarMarcas,
    controladorDeleteMarcas
}