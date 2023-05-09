function ButtonContador({icono, resultado}) {

    function manejadorClick(){
        resultado()
    }



    return (
      <>
      <button onClick={manejadorClick}>{icono}</button>
      </>
    );
  }
  
  export default ButtonContador;