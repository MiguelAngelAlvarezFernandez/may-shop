import { /*Link,*/ useNavigate } from "react-router-dom";

function BotonEnrutado({texto, ruta}) {

    const navigate = useNavigate()

    function manejadorEnrutador() {
        navigate(ruta)
      }
      
    return (
      <>
        <button onClick={manejadorEnrutador}>{texto}</button>

        {/*Si en lugar de un botón queremos un link, importamos Link de
        de react-router-dom e incorporamos la etiqueta Link con la ruta destino*/}
        {/*<Link to={ruta}>{texto}</Link>*/}
      </>
    );
  }
  
  export default BotonEnrutado;