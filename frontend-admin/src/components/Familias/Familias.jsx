import { useState, useEffect } from "react";
import { recuperarFamilias } from "../../lib/fetch.mjs";
import Familia from "./Familia/Familia.jsx";

function Familias({arrayFamilias, setArrayFamilias}) {
    const [Familias, setFamilias] =useState([])

    useEffect(
        ()=> {recuperarFamilias(setFamilias)},
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
       {Familias.map (familia => <Familia key = {familia.id} familia={familia} yDespuesCheck={manejadorClick}></Familia> )}
      </>
    );
  }
  
  export default Familias;