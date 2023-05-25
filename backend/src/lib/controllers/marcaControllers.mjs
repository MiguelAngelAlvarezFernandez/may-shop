import { Marca } from "../db/modelsRelationchips.mjs";

async function controladorNuevaMarca(peticion, respuesta) {
    try {
        const nuevaMarca = await Marca.create(peticion.body)
        respuesta.status(201).send(nuevaMarca.toJSON())
    } catch (error) {
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorRecuperarMarcas(_, respuesta) {
    try {
        respuesta.json(await Marca.findAll())
    } catch (error) {
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorDeleteMarcas (peticion, respuesta) {
    try{
        const marcaToDelete = await Marca.findByPk(peticion.params.id)
        if (! marcaToDelete) {respuesta.status(404).send("Marca not found")}
        else {
            await marcaToDelete.destroy()
            respuesta.status(200).send("Marca borrada")
        }
    }
    catch(error){
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

export {
    controladorNuevaMarca,
    controladorRecuperarMarcas,
    controladorDeleteMarcas
}