import { Articulo, Marca, Familia, Foto, Carrito, DetalleCarrito } from "../db/modelsRelationchips.mjs"

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

async function controladorRecuperarCarrito (_, respuesta){
    try {
        const [carrito] = await Carrito.findOrCreate 
        ({where: {pedidoFirme: false},
        include: [Articulo]}
        )
        respuesta.json(carrito)
    } catch{
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

export {
    controladorNuevoArticulo,
    controladorRecuperarArticulos,
    controladorDeleteArticulos,
    controladorNuevaMarca,
    controladorRecuperarMarcas,
    controladorDeleteMarcas,
    controladorNuevaFamilia,
    controladorRecuperarFamilias,
    controladorRecuperarCarrito
}