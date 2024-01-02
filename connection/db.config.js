

require("dotenv").config();
// const sequelize = {
//    HOST: "localhost",
//    USER: "root",
//    PASSWORD: "123456",
//    DB: "testdb",
//    dialect: "mysql",
//    pool: {
//      max: 5,
//      min: 0,
//      acquire: 30000,
//      idle: 10000
//    }

//  };

const Sequelize = require("sequelize");
 //database connection

 const sequelize = new Sequelize(
    
   
   'testdb',
    'root',
    '1234',
     {
       host:"localhost",
       dialect: 'mysql',
       pool: {
         max: 5,
         min: 0,
         acquire: 30000,
         idle: 10000
       }
     }
    
   );

 
 sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

  module.exports = sequelize;
 
