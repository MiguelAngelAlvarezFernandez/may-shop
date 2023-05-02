function Familia({familia}) {


    return (
      <>
       <label key = {familia.id}>
            <input type = "checkbox" name = {familia.nombre} value = {familia.id}/>
            {familia.nombre}
        </label>
      </>
    );
  }
  
  export default Familia;