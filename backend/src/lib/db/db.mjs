import { Sequelize }  from 'sequelize';


const db = new Sequelize({
    dialect: 'sqlite',
    storage: './MayShop.sqlite'
});

export default db