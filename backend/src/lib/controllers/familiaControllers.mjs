import { Familia } from "../db/modelsRelationchips.mjs";

async function controladorNuevaFamilia(peticion, respuesta) {
    try {
        if (peticion.params.idPadre) {
            const padre = await Familia.findByPk(peticion.params.idPadre)
            const nuevaFamilia = await padre.createFamilium(peticion.body)
            respuesta.status(201).send(nuevaFamilia.toJSON())
        } else {
            const nuevaFamilia = await Familia.create(peticion.body)
            respuesta.status(201).send(nuevaFamilia.toJSON())
        }
    } catch (error) {
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorRecuperarFamilias(_, respuesta) {
    try {
        respuesta.json(await Familia.findAll())
    } catch (error) {
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

export {
    controladorNuevaFamilia,
    controladorRecuperarFamilias
}