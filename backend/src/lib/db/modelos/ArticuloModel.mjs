import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const Articulo = db.define('Articulo', {
    denominacion: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.TEXT
    },
    precioBruto: {
        type: DataTypes.FLOAT,
        get() {
            const value = this.getDataValue('precioBruto');
            return value === null ? null : parseFloat(value);
        }
    }, 
    novedad: {
        type: DataTypes.BOOLEAN
    }
});

export default Articulo