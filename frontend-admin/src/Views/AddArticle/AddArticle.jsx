import { useState} from "react"
import {crearNuevoArticulo} from "../../lib/fetch.mjs" 
import Marcas from "../../components/Marcas/Marcas.jsx"
import Familias from "../../components/Familias/Familias.jsx"

function AddArticle() {
    const [mostrarFamilia, setmostrarFamilia]=useState(false)
    const [ denominacion, setDenominacion] = useState("")
    const [ descripcion, setDescripcion] = useState("")
    const [ precioBruto, setPrecioBruto] = useState("")
    const [ novedad, setNovedad] = useState(true)
    const estadoMarcaId = useState("")
    const [ MarcaId, setMarcaId] = estadoMarcaId
    



    function mostrarFamilias () {
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
                <Marcas estadoMarcaId={estadoMarcaId}></Marcas>
            </label>

            <button onClick={mostrarFamilias}>Selecciona una familia</button>
            {
                mostrarFamilia===true &&
                <Familias></Familias>
            }
        
            <button onClick={manejadorSubmit}>Enviar</button>
    </>
  );
}

export default AddArticle;