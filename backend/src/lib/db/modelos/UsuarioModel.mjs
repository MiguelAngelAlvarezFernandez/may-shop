import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const Usuario = db.define('Usuario', {
    NombreUsuario: {
        type: DataTypes.STRING,
        unique: true
    },
    Password: {
        type: DataTypes.STRING
    }  
});

export default Usuario