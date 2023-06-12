import { Sequelize }  from 'sequelize';

let db

switch (process.env.NODE_ENV) {
    case 'production':
    case 'staging':
        db = new Sequelize(
            process.env.DB_URL,
            {
                dialectOptions: { decimalNumbers: true }
            }
        );
        break;

    default:
        db = new Sequelize({
            dialect: 'sqlite',
            storage: './MayShop.sqlite'
        });
        break;
}

export default db