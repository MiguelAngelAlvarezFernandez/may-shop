import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const Marca = db.define('Marca', {
    nombre: {
        type: DataTypes.STRING
    }
});

export default Marca