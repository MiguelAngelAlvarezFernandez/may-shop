import { useState } from "react"

function AddArticle() {

    const [ Marcas, setMarcas] = useState([])

    /*fetch("http://localhost:8000/Marca/").then( respuesta => {
        respuesta.json().then( datos=> {
            setArticulos(datos)
        })
    })*/

    /*async function recuperarArticulos(manexadorDatos) {
        const respuesta = await fetch("http://localhost:8000/Marca/")
        const datos = await respuesta.json()
        setArticulos(datos)
    }*/

    async function recuperarMarcas() {
        try {
            const respuesta = await fetch("http://localhost:8000/Marca/")
            if (respuesta.ok) {
                const datos = await respuesta.json()
                setMarcas(datos)
            } else {
                alert("Uuups! Non poidemos recuperar a lista de autores. Intentao de novo.")
            }
        } catch (excepcion) {
            console.error(excepcion)
            alert(excepcion)
        }
    } 

  return (
    <>
        <h2>Lista de Marcas</h2>
        <button onClick={recuperarMarcas}>Lista Marcas</button>
        <ul>{Marcas.map( marca => <li>{marca.nombre}</li> )}</ul> 

        <h2>Añadir Articulo</h2>
            <label>
                Denominacion
                <input type="text"/>
            </label>
            <label>
                Descripción
                <input type="text"/>
            </label>
            <label>
                Precio bruto
                <input type="text"/>
            </label>
            <label>
                Novedad
                <input type="checkbox" value="novedad"/>
            </label>
            <select name="Marcas">
                {Marcas.map( marca => <option value={marca.id}>{marca.nombre}</option> )}
                {/*<option value="Marca2">Marca 2</option>
                <option value="Marca3">Marca 3</option>*/}
            </select>
            <select name="Familias">
                <option value="Familia1">Familia 1</option>
                <option value="Familia2">Familia 2</option>
                <option value="Familia3">Familia 3</option>
            </select>
            <button>Enviar</button>
    </>
  );
}

export default AddArticle;