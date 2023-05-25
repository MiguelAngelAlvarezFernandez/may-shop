import {Link, Route, Routes,} from 'react-router-dom'
import styles from "./Navigator.module.css"
import Principal from '../../views/Principal/Principal';
import Carrito from '../../views/Carrito/Carrito';
import CheckoutForm from "../../views/CheckoutForm/CheckoutForm"



function Navigator() {

    return (
      <>
        <nav>
            <ul className={styles.lista}>
                <li><Link to={'/'}> Principal </Link></li>
                <li className={styles.Carrito}><Link to={'/Carrito/'}> Carrito </Link></li>
                <li className={styles.Carrito}><Link to={'/Carrito/CheckoutForm/'}> Carrito </Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path = '/' element={<Principal/>}/>
            <Route path = '/Carrito/' element={<Carrito/>}/>
            <Route path = '/Carrito/CheckoutForm/' element={<CheckoutForm/>}/>
        </Routes>
      </>
    );
  }
  
  export default Navigator;