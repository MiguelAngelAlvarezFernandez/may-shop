import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const DetalleCarrito = db.define('DetalleCarrito', {
    cantidad: {
        type: DataTypes.NUMBER
    },
    precioBruto: {
        type: DataTypes.NUMBER
    },
    IVA: {
        type: DataTypes.NUMBER
    }
});

export default DetalleCarrito