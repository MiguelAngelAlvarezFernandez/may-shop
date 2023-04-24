function Marca({Marcas}) {


    return (
      <>
       {Marcas.map( marca => <option key = {marca.id} value={marca.id}>{marca.nombre}</option> )}
      </>
    );
  }
  
  export default Marca;