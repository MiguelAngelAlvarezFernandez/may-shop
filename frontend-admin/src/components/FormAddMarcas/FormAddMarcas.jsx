import { useState } from "react";
import { crearNuevaMarca } from "../../lib/fetch.mjs";

function FormAddMarcas() {

    const [nombre, setNombre] = useState("")

    function manejadorInput (event) {
        setNombre (event.target.value)
    }

    function manejadorSubmit () {
        crearNuevaMarca ({nombre}
        , manejadorRespuesta)
    }

    function manejadorRespuesta(respuesta) {
        console.log(respuesta);
        setNombre("")
    }

    return (
      <>
        <h2>Añadir Nueva Marca</h2>
        <div>
            <label>
                Nombre Marca
                <input type="text" value={nombre} onInput={manejadorInput}/>
            </label>
            <button onClick={manejadorSubmit}>Crear Marca</button>
        </div>
      </>
    );
  }
  
  export default FormAddMarcas;