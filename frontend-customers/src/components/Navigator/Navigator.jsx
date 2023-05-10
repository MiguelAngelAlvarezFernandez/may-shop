import {Link, Route, Routes,} from 'react-router-dom'
import styles from "./Navigator.module.css"
import Principal from '../../views/Principal/Principal';
import Carrito from '../../views/Carrito/Carrito';



function Navigator() {

    return (
      <>
        <nav>
            <ul className={styles.lista}>
                <li><Link to={'/'}> Principal </Link></li>
                <li className={styles.Carrito}><Link to={'/Carrito/'}> Carrito </Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path = '/' element={<Principal/>}/>
            <Route path = '/Carrito/' element={<Carrito/>}/>
        </Routes>
      </>
    );
  }
  
  export default Navigator;