import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const DetalleCarrito = db.define('DetalleCarrito', {
    cantidad: {
        type: DataTypes.INTEGER
    },
    precioBruto: {
        type: DataTypes.FLOAT,
        get() {
            const value = this.getDataValue('precioBruto');
            return value === null ? null : parseFloat(value);
        }
    },
    IVA: {
        type: DataTypes.FLOAT
    }
});

export default DetalleCarrito