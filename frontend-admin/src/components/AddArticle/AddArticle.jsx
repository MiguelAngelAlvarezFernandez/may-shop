import { useState, useEffect } from "react"
import {recuperarMarcas, recuperarFamilias, crearNuevoArticulo} from "../../lib/fetch.mjs" 

function AddArticle() {

    const [Marcas, setMarcas] = useState([])
    const [Familias, setFamilias] =useState([])
    const [mostrarFamilia, setmostrarFamilia]=useState(false)

    const [ denominacion, setDenominacion] = useState("")
    const [ descripcion, setDescripcion] = useState("")
    const [ precioBruto, setPrecioBruto] = useState("")
    const [ novedad, setNovedad] = useState(true)
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
        ()=> function manejadorRecuperarMarcasyFamilias() {
            recuperarMarcas(setMarcas)
            recuperarFamilias(setFamilias)
        },
        []
    ) 

    function monstrarFamilias () {
        setmostrarFamilia(!mostrarFamilia)
    }

    function manejadorSubmit() {
        crearNuevoArticulo (
            {Denominacion: denominacion, Descripcion: descripcion, PrecioBruto: precioBruto, Novedad: novedad}
            , manejadorRespuesta
            )
    }
    function manejadorRespuesta(respuesta) {
        console.log(respuesta);
    }

  return (
    <>
        <h2>Añadir Articulo</h2>
            <label>
                Denominacion
                <input type="text" value={denominacion} onInput={(event)=>{setDenominacion(event.target.value)}}/>
            </label>
            <label>
                Descripción
                <input type="text" value={descripcion} onInput={(event)=>{setDescripcion(event.target.value)}}/>
            </label>
            <label>
                Precio bruto
                <input type="text" value={precioBruto} onInput={(event)=>{setPrecioBruto(event.target.value)}}/>
            </label>
            <label>
                <input type="checkbox" value={novedad} onInput={(event)=>{setNovedad(event.target.checked)}}/>
                Novedad
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
        
            <button onClick={manejadorSubmit}>Enviar</button>
    </>
  );
}

export default AddArticle;