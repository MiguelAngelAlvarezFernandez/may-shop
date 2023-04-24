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

return (
  <>
    <select name="Marcas">
      <Marca setIdMarca={setMarcaId} Marcas={Marcas}></Marca>
    </select>
  </>
    );
  }
  
  export default Marcas;