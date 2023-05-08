import { useState, useEffect} from "react";
import { recuperarArticulos } from "../../lib/fetch.mjs";


function Articulos() {

    const [articulos, setArticulos] = useState ([])

    useEffect(
        ()=> {
            recuperarArticulos(setArticulos)
        },[]
      ) 

    return (
      <>
        {articulos.map (articulo => 
        <div>
            <div className="galeria">
                {articulo.Fotos.map( foto =>
                    <img src={foto.datos} alt="Foto articulo"/>
                ) }
            </div>
            <p>{articulo.novedad ? "¡NOVEDAD!" :""}</p>
            <p>{articulo.denominacion}</p>
            <p>{articulo.precioBruto}</p>
        </div>
        )}
      </>
    );
  }
  
  export default Articulos;