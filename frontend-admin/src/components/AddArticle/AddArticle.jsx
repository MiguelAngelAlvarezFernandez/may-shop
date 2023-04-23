import { useState, useEffect } from "react"
import {recuperarFamilias, crearNuevoArticulo} from "../../lib/fetch.mjs" 
import Marcas from "../Marcas/Marcas.jsx"

function AddArticle() {

    const [Familias, setFamilias] =useState([])
    const [mostrarFamilia, setmostrarFamilia]=useState(false)

    const [ denominacion, setDenominacion] = useState("")
    const [ descripcion, setDescripcion] = useState("")
    const [ precioBruto, setPrecioBruto] = useState("")
    const [ novedad, setNovedad] = useState(true)
    const [ MarcaId, setMarcaId] = useState("")

    useEffect(
        ()=> function manejadorRecuperarFamilias() {
            recuperarFamilias(setFamilias)
        },
        []
    ) 

    function monstrarFamilias () {
        setmostrarFamilia(!mostrarFamilia)
    }

    function manejadorSubmit() {
        crearNuevoArticulo (
            {denominacion, descripcion, precioBruto, novedad, MarcaId}
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
                <Marcas setMarcaId={setMarcaId} ></Marcas>
            </label>

            <button onClick={monstrarFamilias}>Selecciona una familia</button>
            {
                mostrarFamilia===true &&
                Familias.map (familia => <label key = {familia.id}>
                <input type = "checkbox" name = {familia.nombre} value = {familia.id}/>
                {familia.nombre}
                </label>)
            }
        
            <button onClick={manejadorSubmit}>Enviar</button>
    </>
  );
}

export default AddArticle;