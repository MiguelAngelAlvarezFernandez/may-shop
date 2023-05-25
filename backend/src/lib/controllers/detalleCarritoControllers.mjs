import { DetalleCarrito } from "../db/modelsRelationchips.mjs";
import {Op} from "sequelize"

async function controladorActualizarDetalleCarrito(peticion, respuesta){
    try{ 
        const detallesAActualizar = await DetalleCarrito.findOne({ 
            where: { [Op.and]: [ {ArticuloId: peticion.body.ArticuloId}, 
            {CarritoId: peticion.body.CarritoId} ] }})
            if (! detallesAActualizar) {
                respuesta.status(404).send("Detalle not found")
            }
            else {detallesAActualizar.update(peticion.body)
                respuesta.status(200).send("OK")
            }
    } catch(error){
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorPostDetalleCarrito(peticion, respuesta) {
    try {
        const nuevoDetalleCarrito = await DetalleCarrito.create(peticion.body)
        respuesta.status(201).send(nuevoDetalleCarrito.toJSON())
    } catch (error) {
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

async function controladorDeleteDetalleCarrito (peticion, respuesta) {
    try{
        const detalleToDelete = await DetalleCarrito.findOne({ 
            where: { [Op.and]: [ {ArticuloId: peticion.body.ArticuloId}, 
            {CarritoId: peticion.body.CarritoId} ] }})
            if (! detalleToDelete) {
                respuesta.status(404).send("Detalle not found")
            }
            else {detalleToDelete.destroy(peticion.body)
                respuesta.status(200).send("Articulo eliminado de carrito")
            }
    } catch(error){
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
}

export {
    controladorActualizarDetalleCarrito,
    controladorPostDetalleCarrito,
    controladorDeleteDetalleCarrito
}