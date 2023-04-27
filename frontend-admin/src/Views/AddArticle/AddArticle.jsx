import { useState} from "react"
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
                    <input type="checkbox" value={novedad} onInput={(event)=>{setNovedad(event.target.checked)}}/>
                    Novedad
                </label>
                <label>
                    Marca:
                    <Marcas setMarcaId={setMarcaId}></Marcas>
                </label>

                <button onClick={mostrarFamilias}>Selecciona una familia</button>
                {
                    mostrarFamilia===true &&
                    <Familias></Familias>
                }
            
                <button onClick={manejadorSubmit} className={styles.button}>Enviar</button>
            </div>
    </>
  );
}

export default AddArticle;