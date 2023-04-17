import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const Cliente = db.define('Cliente', {
    Nombre: {
        type: DataTypes.STRING
    },
    Direccion: {
        type: DataTypes.STRING
    },
    Telefono: {
        type: DataTypes.NUMBER
    },
    EMail: {
        type: DataTypes.STRING
    },
    Premium: {
        type: DataTypes.BOOLEAN
    },
    ClienteNuevo: {
        type: DataTypes.BOOLEAN
    },
    Impago: {
        type: DataTypes.BOOLEAN
    }
});

export default Cliente