import { Sequelize, DataTypes }  from 'sequelize';

const db = new Sequelize({
    dialect: 'sqlite',
    storage: './MayShop.sqlite'
});

const Articulo = db.define('Articulo', {
    denominacion: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    precioBruto: {
        type: DataTypes.DECIMAL
    }, 
    novedad: {
        type: DataTypes.BOOLEAN
    }
});

const Marca = db.define('Marca', {
    nombre: {
        type: DataTypes.STRING
    }
});

const Familia = db.define('Familia', {
    nombre: {
        type: DataTypes.STRING
    }
});

const Foto = db.define('Foto', {
});

const Carrito = db.define('Carrito', {
    pedidoFirme: {
        type: DataTypes.BOOLEAN
    }
});

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

const Usuario = db.define('Usuario', {
    NombreUsuario: {
        type: DataTypes.STRING,
        unique: true
    },
    Password: {
        type: DataTypes.STRING
    }  
});

Marca.hasMany(Articulo)
Articulo.belongsTo(Marca)

Articulo.belongsToMany(Familia, {through: "ArticuloFamilia"})
Familia.belongsToMany(Articulo, {through: "ArticuloFamilia"})

Articulo.belongsToMany(Foto, {through: "ArticuloFoto"})
Foto.belongsToMany(Articulo, {through: "ArticuloFoto"})

Articulo.belongsToMany(Carrito, { through: DetalleCarrito });
Carrito.belongsToMany(Articulo, { through: DetalleCarrito });

Cliente.hasMany(Carrito)
Carrito.belongsTo(Cliente)

Cliente.hasOne(Usuario)
Usuario.belongsTo(Cliente)

Familia.hasOne(Familia);
Familia.belongsTo(Familia);

await db.sync({ alter: true })

export {
    Articulo,
    Carrito,
    Cliente,
    DetalleCarrito,
    Familia,
    Foto,
    Marca,
    Usuario,
}