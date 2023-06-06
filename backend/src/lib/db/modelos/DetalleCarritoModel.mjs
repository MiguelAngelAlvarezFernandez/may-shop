import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const DetalleCarrito = db.define('DetalleCarrito', {
    cantidad: {
        type: DataTypes.INTEGER
    },
    precioBruto: {
        type: DataTypes.FLOAT
    },
    IVA: {
        type: DataTypes.FLOAT
    }
});

export default DetalleCarrito