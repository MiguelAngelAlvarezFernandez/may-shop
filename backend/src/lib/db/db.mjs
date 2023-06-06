import { Sequelize }  from 'sequelize';

let dbOptions

console.log("production",process.env.NODE_ENV);

switch (process.env.NODE_ENV) {
    case 'production':
    case 'staging':
        dbOptions = process.env.DB_URL
        break;

    default:
        dbOptions = {
            dialect: 'sqlite',
            storage: './database.sqlite'
        }
        break;
}


const db = new Sequelize({
    dialect: 'sqlite',
    storage: './MayShop.sqlite'
});

export default db