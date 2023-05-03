import { useState, useEffect } from "react";
import { recuperarFamilias } from "../../lib/fetch.mjs";
import Familia from "./Familia/Familia.jsx";

function Familias({arrayFamilias, setArrayFamilias}) {
    const [Familias, setFamilias] =useState([])

    useEffect(
        ()=> function manejadorRecuperarFamilias() {
            recuperarFamilias(setFamilias)
        },
        []
    ) 

    function manejadorClick(evento) {
      const checkbox = evento.target
      const opcionesSeleccionadas = new Set(arrayFamilias)
      if (checkbox.checked) opcionesSeleccionadas.add(checkbox.value)
      else opcionesSeleccionadas.delete(checkbox.value)
      setArrayFamilias(Array.from(opcionesSeleccionadas))
    }

    return (
      <>
       {Familias.map (familia => <Familia familia={familia} onClick = {manejadorClick} ></Familia> )}
      </>
    );
  }
  
  export default Familias;