import { useState } from "react";
import { crearNuevaFamilia } from "../../lib/fetch.mjs";

function FormAddFamilias() {

    const[nombre, setNombre] = useState("")

    function manejadorInput (event){
        setNombre(event.target.value)
    }

    function manejadorSubmit () {
        crearNuevaFamilia({nombre}
        , manejadorRespuesta)
    }

    function manejadorRespuesta(respuesta) {
        console.log(respuesta);
        setNombre("")
    }

    return (
      <>
        <h2>Añadir Nueva Familia</h2>
        <div>
            <label>
                Nombre Familia
                <input type="text" value={nombre} onInput={manejadorInput}/>
            </label>
            <button onClick={manejadorSubmit}>Crear Familia</button>
        </div>
      </>
    );
  }
  
  export default FormAddFamilias;