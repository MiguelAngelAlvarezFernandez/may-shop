import { DataTypes }  from 'sequelize';
import db from "../db.mjs"

const Foto = db.define('Foto', {
    datos: {
        type: DataTypes.TEXT("long")
    }
});

export default Foto