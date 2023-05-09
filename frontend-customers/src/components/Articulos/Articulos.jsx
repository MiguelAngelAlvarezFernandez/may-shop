import { useState, useEffect} from "react";
import { recuperarArticulos } from "../../lib/fetch.mjs";
import styles from "./Articulos.module.css"
import ButtonContador from "../ButtonContador/ButtonContador.jsx";


function Articulos() {

    const [articulos, setArticulos] = useState ([])
    const[cantidad, setCantidad]=useState(0)

    useEffect(
        ()=> {
            recuperarArticulos(setArticulos)
        },[]
      ) 

    function sumaCantidad(){
      setCantidad(cantidad+1)
    }

    function restaCantidad(){
      setCantidad(cantidad>0 ? cantidad-1 : 0) 
    }

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
              <div className={styles.contadorCantidad}>
                <p> {cantidad} </p>
                <ButtonContador icono="-" resultado={restaCantidad}/>
                <ButtonContador icono="+" resultado={sumaCantidad}/>
              </div>
          </div>
          )}
        </div>
      </>
    );
  }
  
  export default Articulos;