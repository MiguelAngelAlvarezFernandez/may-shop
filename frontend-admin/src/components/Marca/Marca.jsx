
function Marca({setMarcaId,Marcas}) {

    return (
      <>
       {Marcas.map( marca => <option key = {marca.id} value={marca.id} onClick={(event)=>{setMarcaId(event.target.value)}}>{marca.nombre}</option> )}
      </>
    );
  }
  
  export default Marca;