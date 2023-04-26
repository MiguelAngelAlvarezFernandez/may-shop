import { useState, useEffect } from "react"
import { recuperarMarcas } from "../../lib/fetch.mjs";
import Marca from "./Marca/Marca.jsx";

function Marcas({estadoMarcaId}) {

const [Marcas, setMarcas] = useState([])
const [ MarcaId, setMarcaId] = estadoMarcaId

useEffect(
  ()=> function manejadorRecuperarMarcas() {
      recuperarMarcas(setMarcas)
  },
  []
) 

useEffect(
  ()=>setMarcaId(Marcas[0]?.id)
  ,[Marcas]
)

function manejadorChange (event) {
  setMarcaId (event.target.value)
}

return (
  <>
    <select name="Marcas" onChange={manejadorChange} value={MarcaId}>
      <Marca Marcas={Marcas}></Marca>
    </select>
  </>
    );
  }
  
  export default Marcas;