import Pagao from "./Pagao.gif"
import styles from "./ConfirmacionPago.module.css"
import { recuperarCarrito } from "../../lib/fetch.mjs";
import { CarritoContext } from "../../App";

function ConfirmacionPago() {

  const[_, setCarrito]=useContext(CarritoContext)

  useEffect(
    ()=> recuperarCarrito(setCarrito)
    ,[]
    )
  
    return (
      <div className={styles.container}>
        <p>PAGO REALIZADO CORRECTAMENTE</p>
        <img className={styles.gif} src={Pagao} alt="Confirmación pago"/>
        <p>¡¡¡MUCHAS GRACIAS POR TU COMPRA!!!</p>
      </div>
    );
  }
  
  export default ConfirmacionPago