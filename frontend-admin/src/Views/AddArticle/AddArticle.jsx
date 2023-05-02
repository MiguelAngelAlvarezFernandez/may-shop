import {useState} from "react"
import {crearNuevoArticulo} from "../../lib/fetch.mjs" 
import Marcas from "../../components/Marcas/Marcas.jsx"
import Familias from "../../components/Familias/Familias.jsx"
import styles from "./AddArticle.module.css"

function AddArticle() {
    const [mostrarFamilia, setmostrarFamilia]=useState(false)
    const [ denominacion, setDenominacion] = useState("")
    const [ descripcion, setDescripcion] = useState("")
    const [ precioBruto, setPrecioBruto] = useState("")
    const [ novedad, setNovedad] = useState(true)
    const [ MarcaId, setMarcaId] = useState("")
    const [arrayFamilias, setArrayFamilias] = useState ([])
    
    function mostrarFamilias () {
        setmostrarFamilia(!mostrarFamilia)
    }

    function manejadorSubmit() {
        crearNuevoArticulo (
            {denominacion, descripcion, precioBruto, novedad, MarcaId, arrayFamilias}
            , manejadorRespuesta
            )
    }
    function manejadorRespuesta(respuesta) {
        console.log(respuesta);
        if (respuesta.ok) {
            setDenominacion("")
            setDescripcion("")
            setPrecioBruto("")
            setNovedad(true)
            setMarcaId("0")
            setArrayFamilias([])
            alert("Articulo creado correctamente")
        }
    }

  return (
    <>
        <h2>Añadir Articulo</h2>
            <div className={styles.form}>
                <label className={styles.input}>
                    Denominacion:
                    <input type="text" value={denominacion} onInput={(event)=>{setDenominacion(event.target.value)}}/>
                </label>
                <label className={styles.input}>
                    Descripción:
                    <input type="text" value={descripcion} onInput={(event)=>{setDescripcion(event.target.value)}}/>
                </label>
                <label className={styles.input}>
                    Precio bruto:
                    <input type="text" value={precioBruto} onInput={(event)=>{setPrecioBruto(event.target.value)}}/>
                </label>
                <label>
                    <input type="checkbox" value={novedad}  checked = {novedad===true} onChange={()=>{setNovedad(!novedad)}}/>
                    Novedad
                </label>
                <label>
                    Marca:
                    <Marcas marcaActual={MarcaId} setMarcaId={setMarcaId}></Marcas>
                </label>

                <button onClick={mostrarFamilias}>Pincha aquí para seleccionar la familia o familias a las que pertenece el artículo</button>
                {
                    mostrarFamilia===true &&
                    <Familias arrayFamilias={arrayFamilias} setArrayFamilias={setArrayFamilias}></Familias>
                }
            
                <button onClick={manejadorSubmit} className={styles.button}>Crear artículo</button>
            </div>
    </>
  );
}

export default AddArticle;