const createSchema = {
    name: 'create-schema',
    text: `CREATE SCHEMA IF NOT EXISTS data`,
};

const createSizeEnum = {
    name: 'create-size-enum',
    text: `CREATE TYPE IF NOT EXISTS size AS ENUM ('small', 'medium', 'large')`,
};

const createItemsTable = {                                                 //article   //run a doua
    name: 'create-items-table',
    text: `CREATE TABLE IF NOT EXISTS items_table
           (
               id                       SERIAL PRIMARY KEY,
               item_name                varchar(255) NOT NULL,
               price                    INTEGER NOT NULL,
               image_link               text,
               material                 varchar(255),
               size                     size
            )`,
};

const createCategoryTable = {                                            //tag    //run prima
    name: 'create-category-table',
    text: `CREATE TABLE IF NOT EXISTS category_table
           (
               id                  SERIAL PRIMARY KEY,
               category_name       varchar(255) UNIQUE,                 
               description         varchar(255)                      
           )`,
};

const createItemsDetailsTable = {                                                     //run a patra
    name: 'create-details-table',
    text: `CREATE TABLE IF NOT EXISTS items_details_table
           (    
               item_id                   INTEGER REFERENCES items_table(id) UNIQUE,
               item_details_id           SERIAL PRIMARY KEY,
               serial_number             BIGINT UNIQUE,
               lot_number                BIGINT UNIQUE
           )`,
};

const createItemsCategoriesTable = {                                   //article-tag    // run a treia
    name: 'create-items-categories-table',
    text: `CREATE TABLE IF NOT EXISTS item_categories 
            (
            item_id        INTEGER,
            category_id    INTEGER,
            PRIMARY KEY (item_id, category_id),  
            CONSTRAINT fk_item_id FOREIGN KEY(item_id) REFERENCES items_table(id),   
            CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category_table(id)
           )`,
};


//  const addOneToOneRelationItemsTable = {
//      name: 'alter-tables',
//      text: `ALTER TABLE items_table
//             ADD COLUMN fk_item_details_id INT UNIQUE,
//             ADD CONSTRAINT fk_item_details_id FOREIGN KEY (fk_item_details_id) REFERENCES items_details_table(item_details_id) `,
//  };

//  const addoneToOneRelationDetailsTable = {
//      name: 'alter-second-table',
//      text: `ALTER TABLE items_details_table
//             ADD COLUMN fk_item_name_id INT UNIQUE,
//             ADD CONSTRAINT fk_item_name_id FOREIGN KEY (fk_item_name_id) REFERENCES items_table(item_name_id)`,
//  };


module.exports = {
    createSchema,
    createItemsTable,
    createCategoryTable,
    createItemsDetailsTable,
    createSizeEnum,
    createItemsCategoriesTable,
};

