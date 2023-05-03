import { useState } from "react";

function Familia({familia, yDespuesCheck}) {

    const [check, setCheck] = useState (false)

    function manejadorCheck (evento) {
      setCheck (!check)
      yDespuesCheck (evento)
    }

    return (
      <>
       <label key = {familia.id}>
            <input type = "checkbox" name={familia.nombre} value={familia.id} checked={check} onChange={manejadorCheck} />
            {familia.nombre}
        </label>
      </>
    );
  }
  
  export default Familia;