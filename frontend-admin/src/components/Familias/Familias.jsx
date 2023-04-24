import { useState, useEffect } from "react";
import { recuperarFamilias } from "../../lib/fetch.mjs";
import Familia from "./Familia/Familia.jsx";

function Familias() {
    const [Familias, setFamilias] =useState([])

    useEffect(
        ()=> function manejadorRecuperarFamilias() {
            recuperarFamilias(setFamilias)
        },
        []
    ) 

    return (
      <>
       {Familias.map (familia => <Familia familia={familia}></Familia> )}
      </>
    );
  }
  
  export default Familias;