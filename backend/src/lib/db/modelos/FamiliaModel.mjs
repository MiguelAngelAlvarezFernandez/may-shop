import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const Familia = db.define('Familia', {
    nombre: {
        type: DataTypes.STRING
    }
});

export default Familia