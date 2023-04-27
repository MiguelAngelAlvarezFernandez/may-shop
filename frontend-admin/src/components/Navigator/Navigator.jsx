import {Link, Route, Routes, BrowserRouter} from 'react-router-dom'
import styles from "./Navigator.module.css"
import Inicio from '../../Views/Inicio/Inicio';
import AddArticle from '../../Views/AddArticle/AddArticle';
import AddMarcasAndFamilias from '../../Views/AddMarcasAndFamilias/AddMarcasAndFamilias';


function Navigator() {

    return (
      <BrowserRouter>
        <nav>
            <ul className={styles.lista}>
                <li><Link to={'/'}> Inicio </Link></li>
                <li><Link to={'/AñadirArticulo/'}> Añadir Articulo </Link></li>
                <li><Link to={'/AñadirMarcasYFamilias/'}> Añadir Marcas y Familias </Link></li>
                <li><Link to={'/ModificarArticulo/'}> Modificar Articulo </Link></li>
                <li><Link to={'/AñadirCliente/'}> Añadir Cliente </Link></li>
                <li><Link to={'/ModificarCliente/'}> Modificar Cliente </Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path = '/' element={<Inicio/>}/>
            <Route path = '/AñadirArticulo/' element={<AddArticle/>}/>
            <Route path = '/AñadirMarcasYFamilias/' element={<AddMarcasAndFamilias/>}/>
            {/*<Route path = '/ModificarArticulo/' element={<ModifyArticle/>}/>
            <Route path = '/AñadirCliente/' element={<AddClient/>}/>
            <Route path = '/ModificarCliente/' element={<ModifyClient/>}/>*/}
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Navigator;