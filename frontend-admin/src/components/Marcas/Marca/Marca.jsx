function Marca({Marcas}) {


    return (
      <>
       <option value="0">Selecciona una marca</option>
       {Marcas.map( marca => <option key = {marca.id} value={marca.id}>{marca.nombre}</option> )}
      </>
    );
  }
  
  export default Marca;