const { Pool } = require('pg');
const config = require('../config/config');
const queries = require('../database/databaseTables');
const data = require('../database/queries');


const pool = new Pool({
    host: config.pgHost,
    user: config.pgUser,
    port: config.pgPort,
    password: config.pgPassword,
    database: config.pgDatabase
});

const createSchema = async () => {
    await pool.query(queries.createSchema)
    .then(res => 'Schema created');
    await pool.end();
};

const createTables = async () => {
    pool.on('connect', (client) => {
        client.query(`SET search_path TO ${config.pgSchema}`);
    });
     await pool.query(queries.createSizeEnum).then(res => "Size type enum has been created");
     console.log("executed-1");
     await pool.query(queries.createItemsTable).then(res => "Items Table has been created");
     console.log("executed");     
     await pool.query(queries.createCategoryTable).then(res => "Category Table has been created");
     console.log("executed2");  
     await pool.query(queries.createItemsCategoriesTable).then(res => "Items Categories table has been created");
     console.log("executed3");  
     await pool.query(queries.createItemsDetailsTable).then(res => "Items Details Table has been created");
     console.log("executed4");  
    
 //   await pool.query(data.AddCategoryData).then(res => "Cateogry Data has been added");
 
 //   await pool.query(data.AddDetailsData).then(res => "Details Data has been added");
 //     await pool.query(data.addItems).then(res => "Items has been added");
 //     await pool.query(data.updateItemCategory).then(res => "The item was updated");
  //   console.log("exeecuted5");
    await pool.end();
};

module.exports = {
    createSchema,
    createTables,
};

require('make-runnable');