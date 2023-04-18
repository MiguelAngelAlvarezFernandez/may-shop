import { useState, useEffect } from "react"
import {recuperarMarcas} from "../../lib/fetch.mjs" 

function AddArticle() {

    const [ Marcas, setMarcas] = useState([])

    /*fetch("http://localhost:8000/Marca/").then( respuesta => {
        respuesta.json().then( datos=> {
            setArticulos(datos)
        })
    })*/

    /*async function recuperarArticulos(manexadorDatos) {
        const respuesta = await fetch("http://localhost:8000/Marca/")
        const datos = await respuesta.json()
        setArticulos(datos)
    }*/

    useEffect(
        ()=> function manejadorRecuperarMarcas() {
            recuperarMarcas(manejadorDatos)
        },
        []
    ) 
    function manejadorDatos(Datos) {
        setMarcas(Datos)
    }
  return (
    <>
        <h2>Añadir Articulo</h2>
            <label>
                Denominacion
                <input type="text"/>
            </label>
            <label>
                Descripción
                <input type="text"/>
            </label>
            <label>
                Precio bruto
                <input type="text"/>
            </label>
            <label>
                Novedad
                <input type="checkbox" value="novedad"/>
            </label>
            <label>
                Selecciona una marca:
                <select name="Marcas">
                {Marcas.map( marca => <option value={marca.id}>{marca.nombre}</option> )}
                </select>
            </label>
            <label>
                Selecciona una familia:
                <select name="Familias">
                    <option value="Familia1">Familia 1</option>
                    <option value="Familia2">Familia 2</option>
                    <option value="Familia3">Familia 3</option>
                </select>
            </label>
            <button>Enviar</button>
    </>
  );
}

export default AddArticle;