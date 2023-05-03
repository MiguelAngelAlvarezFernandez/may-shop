import { useState, useEffect } from "react"
import { recuperarMarcas } from "../../lib/fetch.mjs";
import Marca from "./Marca/Marca.jsx";
import { Link, useNavigate } from "react-router-dom";

function Marcas({MarcaId, setMarcaId}) {

  const navigate = useNavigate()
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

function manejadorCrearMarca() {
  navigate("/AñadirMarcasYFamilias/")
}

return (
  <>
    <select name="Marcas" value={MarcaId} onChange={manejadorChange}>
      <Marca Marcas={Marcas}></Marca>
    </select>
    <button onClick={manejadorCrearMarca}>Crear Marca</button>
    <span>Para crear una nueva marca pincha <Link to="/AñadirMarcasYFamilias/">aquí</Link></span>
  </>
    );
  }
  
  export default Marcas;