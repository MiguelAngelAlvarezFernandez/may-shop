function Marca({Marcas}) {


    return (
      <>
       <option value="selecciona">Selecciona una marca</option>
       {Marcas.map( marca => <option key = {marca.id} value={marca.id}>{marca.nombre}</option> )}
      </>
    );
  }
  
  export default Marca;