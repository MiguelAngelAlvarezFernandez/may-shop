import db from "./db.mjs"

import Articulo from "./modelos/ArticuloModel.mjs"
import Carrito from "./modelos/CarritoModel.mjs"
import Cliente from "./modelos/ClienteModel.mjs"
import DetalleCarrito from "./modelos/DetalleCarritoModel.mjs"
import Familia from "./modelos/FamiliaModel.mjs"
import Foto from "./modelos/FotoModel.mjs"
import Marca from "./modelos/MarcaModel.mjs"
import Usuario from "./modelos/UsuarioModel.mjs"

Marca.hasMany(Articulo)
Articulo.belongsTo(Marca)

Articulo.belongsToMany(Familia, {through: "ArticuloFamilia"})
Familia.belongsToMany(Articulo, {through: "ArticuloFamilia"})

Articulo.belongsToMany(Foto, {through: "ArticuloFoto"})
Foto.belongsToMany(Articulo, {through: "ArticuloFoto"})

Articulo.belongsToMany(Carrito, { through: DetalleCarrito });
Carrito.belongsToMany(Articulo, { through: DetalleCarrito });

Cliente.hasMany(Carrito)
Carrito.belongsTo(Cliente)

Cliente.hasOne(Usuario)
Usuario.belongsTo(Cliente)

Familia.hasMany(Familia);
Familia.belongsTo(Familia, {as: "Subfamilia"});

await db.query('PRAGMA foreign_keys = false;');
await db.sync({ alter: true }) //Si modificamos la BBDD descomentar reiniciar y volver comentar.
//await db.sync()
await db.query('PRAGMA foreign_keys = true;');

export {
    Articulo,
    Carrito,
    Cliente,
    DetalleCarrito,
    Familia,
    Foto,
    Marca,
    Usuario,
}