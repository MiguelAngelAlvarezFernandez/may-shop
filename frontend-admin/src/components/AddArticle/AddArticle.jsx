import { useState, useEffect } from "react"
import {recuperarMarcas, recuperarFamilias} from "../../lib/fetch.mjs" 

function AddArticle() {

    const [ Marcas, setMarcas] = useState([])
    const [Familias, setFamilias] =useState([])

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
            recuperarMarcas(manejadorDatosMarcas)
            recuperarFamilias(manejadorDatosFamilias)
        },
        []
    ) 
    function manejadorDatosMarcas(Datos) {
        setMarcas(Datos)
    }

    function manejadorDatosFamilias(Datos) {
        setFamilias(Datos)
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
                {Familias.map (familia => <option value={familia.id}>{familia.nombre}</option>)}    
                </select>
            </label>
            <button>Enviar</button>
    </>
  );
}

export default AddArticle;