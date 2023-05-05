import { Articulo, Marca, Familia } from "../db/modelsRelationchips.mjs"

async function controladorNuevoArticulo(peticion, respuesta) {
    try {
        const nuevoArticulo = await Articulo.create(peticion.body)
        nuevoArticulo.setFamilia(peticion.body.familias)
        await nuevoArticulo.createFoto({datos: peticion.body.fichero})
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
        console.error(error)
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
            await marcaToDelete.destroy()
            respuesta.status(200).send("Marca borrada")
        }
    }
    catch(error){
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

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
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

export {
    controladorNuevoArticulo,
    controladorNuevaMarca,
    controladorRecuperarMarcas,
    controladorDeleteMarcas,
    controladorNuevaFamilia,
    controladorRecuperarFamilias
}