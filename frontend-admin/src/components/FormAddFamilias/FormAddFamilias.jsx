import { useEffect, useState } from "react";
import { crearNuevaFamilia, recuperarFamilias } from "../../lib/fetch.mjs";

function FormAddFamilias() {

    const[nombre, setNombre] = useState("")
    const [mostrarFamilia, setmostrarFamilia] = useState(false)
    const [idPadre, setIdPadre] = useState ("")
    const [ familias, setFamilias ] = useState([])

    function manejadorInput (event){
        setNombre(event.target.value)
    }

    function manejadorSubmit () {
        crearNuevaFamilia(nombre, idPadre
        , manejadorRespuesta)
    }

    function manejadorRespuesta(respuesta) {
        console.log(respuesta);
        setNombre("")
    }

    function manejadorRadio(evento) {
        setIdPadre(evento.target.value)
    }

    useEffect(
        ()=>{recuperarFamilias(setFamilias)},
        []
    )

    return (
      <>
        <h2>Añadir Nueva Familia</h2>
        <div>
            <label>
                Nombre Familia
                <input type="text" value={nombre} onInput={manejadorInput}/>
            </label>

            <button onClick={()=>{setmostrarFamilia(!mostrarFamilia)}}>Pincha para seleccionar la familia padre</button>
            { mostrarFamilia &&  
                familias.map( familia =>
                    <label>
                        {familia.nombre}
                        <input
                            key={familia.id}
                            name="familia"
                            type="radio"
                            value={familia.id}
                            onClick={manejadorRadio}
                        />
                    </label>
                )
            }

            <button onClick={manejadorSubmit}>Crear Familia</button>
        </div>
      </>
    );
  }
  
  export default FormAddFamilias;