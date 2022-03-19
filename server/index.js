const express = require("express");
const cors = require("cors");
const queries = require('../server/database/queries');
const config = require('../server/config/config');
const db = require('../server/database/database');

const app = express();

//middleware
app.use(cors());
app.use(express.json());


    db.on('connect', (client) => {
        client.query(`SET search_path TO ${config.pgSchema}`);
    });

    app.get('/getAllCategories', async (req, res) => {
        try {
            const results = await db.query(queries.getAllCategories
                );
                  res.send ({
                      data: {
                          category_table: results.rows,
                      },
                  });
             } catch (err) {
             console.log(err);
         }
    });

    app.get('/getAllItems', async (req, res) => {
        try {
            const results = await db.query(queries.getAllItems
                );
                  res.send ({
                      data: {
                          items_table: results.rows,
                      },
                  });
             } catch (err) {
             console.log(err);
         }
    });

    app.get('/getAllDetails', async (req, res) => {
        try {
            const results = await db.query(queries.getAllDetails);

           
                  res.send ({
                      data: {
                          items_details_table: results.rows,
                      },
                  });
             } catch (err) {
             console.log(err);
         }
        
    });

    app.post('/insertItemsTable', async (req, res) => {
        try {
            const results = await db.query(queries.insertItemsTable, [req.body.name, req.body.description, req.body.price, req.body.image_link, req.body.material, req.body.size]);
            res.send ({
                data: {
                    items_table: results.rows,
                },
            });
        } catch (err) {
            console.log(err);
        }
    });

    app.post('/insertCategoriesTable', async (req, res) => {
        try {
            const results = await db.query(queries.insertCategoriesTable, [req.body.name, req.body.description]);
            res.send ({
                data: {
                    category_table: results.rows,
                },
            });
        } catch (err) {
            console.log(err);
        }
    });
    
    



   






  


app.listen(5000, () => {
    console.log("Server has started on port 5000")
});