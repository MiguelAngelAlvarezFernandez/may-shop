import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const Carrito = db.define('Carrito', {
    pedidoFirme: {
        type: DataTypes.BOOLEAN
    }
});

export default Carrito