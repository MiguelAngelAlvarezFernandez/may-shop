import { useState, useEffect } from "react"
import { recuperarMarcas } from "../../lib/fetch.mjs";
import Marca from "./Marca/Marca.jsx";

function Marcas({setMarcaId}) {

const [Marcas, setMarcas] = useState([])

useEffect(
  ()=> function manejadorRecuperarMarcas() {
      recuperarMarcas(setMarcas)
  },
  []
) 

function manejadorChange (event) {
  setMarcaId (event.target.value)
}

return (
  <>
    <select name="Marcas" onChange={manejadorChange}>
      <Marca Marcas={Marcas}></Marca>
    </select>
  </>
    );
  }
  
  export default Marcas;