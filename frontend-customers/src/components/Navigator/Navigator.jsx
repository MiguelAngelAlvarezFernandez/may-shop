import {Link, Route, Routes,} from 'react-router-dom'
import styles from "./Navigator.module.css"
import Principal from '../../views/Principal/Principal';
import Carrito from '../../views/Carrito/Carrito';
import CheckoutForm from "../../views/CheckoutForm/CheckoutForm"
import ConfirmacionPago from '../../views/ConfirmacionPago/ConfirmacionPago';



function Navigator() {

    return (
      <>
        <nav>
            <ul className={styles.lista}>
                <li><Link to={'/'}> Principal </Link></li>
                <li className={styles.Carrito}><Link to={'/Carrito/'}> Carrito </Link></li>
                <li className={styles.Carrito}><Link to={'/Carrito/CheckoutForm/'}> CheckoutForm </Link></li>
                <li className={styles.Carrito}><Link to={'/Carrito/CheckoutForm/ConfirmaciónPago/'}> Confirmación Pago </Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path = '/' element={<Principal/>}/>
            <Route path = '/Carrito/' element={<Carrito/>}/>
            <Route path = '/Carrito/CheckoutForm/' element={<CheckoutForm/>}/>
            <Route path = '/Carrito/CheckoutForm/ConfirmacionPago/' element={<ConfirmacionPago/>}/>
        </Routes>
      </>
    );
  }
  
  export default Navigator;