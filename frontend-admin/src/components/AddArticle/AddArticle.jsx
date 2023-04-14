function AddArticle() {
  return (
    <>
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
                <option value="Marca1">Marca 1</option>
                <option value="Marca2">Marca 2</option>
                <option value="Marca3">Marca 3</option>
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