import { useState, useEffect} from "react";
import { recuperarArticulos } from "../../lib/fetch.mjs";
import styles from "./Articulos.module.css"
import CantidadCarrito from "../CantidadCarrito/CantidadCarrito.jsx";


function Articulos() {

    const [articulos, setArticulos] = useState ([])
    

    useEffect(
        ()=> {
            recuperarArticulos(setArticulos)
        },[]
      ) 

    

    return (
      <>
        <h2 className={styles.titArticulos}>ARTICULOS</h2>
        <div className={styles.articulos}>
          {articulos.map (articulo => 
          <div key={articulo.id} className={styles.articulo}>
              <div className={styles.fotoNovedad}>
              <div className={styles.galeria}>
                  {articulo.Fotos.map( foto =>
                      <img className={styles.imgProductos} key={foto.id} src={foto.datos} alt="Foto articulo"/>
                  )}
                  
              </div>
              <p>{articulo.novedad ? "¡NOVEDAD!" :""}</p>
            </div>
            <p className={styles.articuloDenominacion}>{articulo.denominacion}</p>
            <p>{articulo.precioBruto} €</p>
            <CantidadCarrito articulo={articulo}/>
          </div>
          )}
        </div>
      </>
    );
  }
  
  export default Articulos;