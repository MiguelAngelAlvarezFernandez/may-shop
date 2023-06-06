import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const Articulo = db.define('Articulo', {
    denominacion: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING(1234)
    },
    precioBruto: {
        type: DataTypes.DECIMAL
    }, 
    novedad: {
        type: DataTypes.BOOLEAN
    }
});

export default Articulo