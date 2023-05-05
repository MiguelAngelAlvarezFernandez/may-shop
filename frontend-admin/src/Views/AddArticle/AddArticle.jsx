import {useState} from "react"
import {crearNuevoArticulo} from "../../lib/fetch.mjs" 
import Marcas from "../../components/Marcas/Marcas.jsx"
import Familias from "../../components/Familias/Familias.jsx"
import styles from "./AddArticle.module.css"
import BotonEnrutado from "../../components/BotonEnrutado/BotonEnrutado.jsx"
import { aDataURL } from "../../lib/ficheros.mjs"

function AddArticle() {
    const [mostrarFamilia, setmostrarFamilia]=useState(false)
    const [ denominacion, setDenominacion] = useState("")
    const [ descripcion, setDescripcion] = useState("")
    const [ precioBruto, setPrecioBruto] = useState("")
    const [ novedad, setNovedad] = useState(true)
    const [ MarcaId, setMarcaId] = useState("")
    const [familias, setFamilias] = useState ([])
    const [fichero, setFichero] = useState()
    
    function mostrarFamilias () {
        setmostrarFamilia(!mostrarFamilia)
    }

    function manejadorFichero(event){
        const fichero = event.target.files[0]
        if (fichero) aDataURL(fichero, setFichero)
        else setFichero("")
    }

    function manejadorSubmit() {
        crearNuevoArticulo (
            {denominacion, descripcion, precioBruto, novedad, MarcaId, familias, fichero}
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
            setFamilias([])
            setmostrarFamilia(false)
            setFichero()
            alert("Articulo creado correctamente")
        }
    }

  return (
    <>
            <div className={styles.form}>
            <fieldset>
            <legend className={styles.legend}>Añadir Articulo</legend>
                <div className={styles.innerform}>
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
                <div>
                    <label>
                        Marca:
                        <Marcas MarcaId={MarcaId} setMarcaId={setMarcaId}></Marcas>
                    </label>
                    <BotonEnrutado texto="Ir a crear marca si no existe" ruta ='/AñadirMarcasYFamilias/'/> 
                </div>
                <button onClick={mostrarFamilias}>Pincha aquí para seleccionar la familia o familias a las que pertenece el artículo</button>
                {
                    mostrarFamilia===true &&
                    <Familias arrayFamilias={familias} setArrayFamilias={setFamilias}></Familias>
                }

                <label>
                    Añadir imagen articulo
                    <input type="file" onInput={manejadorFichero}/>
                    { fichero && <img src={fichero} alt="Privisualizacion imagen"/>}
                </label>
            
                <button onClick={manejadorSubmit} className={styles.button}>Crear artículo</button>
                </div>
                </fieldset>
            </div>
        
    </>
  );
}

export default AddArticle;