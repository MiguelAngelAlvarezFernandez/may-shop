import { Articulo, Marca, Foto } from "../db/modelsRelationchips.mjs";

async function controladorNuevoArticulo(peticion, respuesta) {
    try {
        const nuevoArticulo = await Articulo.create(peticion.body)
        nuevoArticulo.setFamilia(peticion.body.familias)
        await nuevoArticulo.createFoto({datos: peticion.body.fichero})
        respuesta.status(201).send(nuevoArticulo.toJSON())
    } catch (error) {
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorRecuperarArticulos(_, respuesta) {
    try {
        respuesta.json(await Articulo.findAll({include:[Marca, Foto]}))
    } catch (error) {
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorDeleteArticulos (peticion, respuesta) {
    try{
        const articuloToDelete = await Articulo.findByPk(peticion.params.id)
        if (! articuloToDelete) {respuesta.status(404).send("Marca not found")}
        else {
            const fotosToDelete = await articuloToDelete.getFotos()
            fotosToDelete.forEach( async foto => {
                if (await foto.countArticulos() <= 1) {
                    foto.destroy()
                }
            });
            await articuloToDelete.destroy()
            respuesta.status(200).send("Articulo borrado")
        }
    }
    catch(error){
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

export {    
    controladorNuevoArticulo,
    controladorRecuperarArticulos,
    controladorDeleteArticulos
}