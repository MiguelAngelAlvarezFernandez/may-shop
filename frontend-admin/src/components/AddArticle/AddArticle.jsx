import { useState, useEffect } from "react"
import {recuperarMarcas, recuperarFamilias} from "../../lib/fetch.mjs" 

function AddArticle() {

    const [Marcas, setMarcas] = useState([])
    const [Familias, setFamilias] =useState([])
    const [mostrarFamilia, setmostrarFamilia]=useState(false)

    const [ Denominacion, setDenominacion] = useState("")
    const [ Descripción, setDescripción] = useState("")
    const [ PrecioBruto, setPrecioBruto] = useState("")
    const [ Novedad, setNovedad] = useState(true)
    const [ Marca, setMarca] = useState("")

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
            recuperarMarcas(setMarcas)
            recuperarFamilias(setFamilias)
        },
        []
    ) 

    function monstrarFamilias () {
        setmostrarFamilia(!mostrarFamilia)
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

            <button onClick={monstrarFamilias}>Selecciona una familia</button>
            {
                mostrarFamilia===true &&
                Familias.map (familia => <label>
                <input type = "checkbox" name = {familia.nombre} value = {familia.id}/>
                {familia.nombre}
                </label>)
            }
        
            <button>Enviar</button>
    </>
  );
}

export default AddArticle;