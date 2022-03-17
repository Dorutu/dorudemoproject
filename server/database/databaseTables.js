const createSchema = {
    name: 'create-schema',
    text: `CREATE SCHEMA IF NOT EXISTS demoprojectdata`,
};

const createSizeEnum = {
    name: 'create-size-enum',
    text: `CREATE TYPE size AS ENUM ('small', 'medium', 'large')`,
};

const createItemsTable = {                                                 //article   //run a doua //run prima
    name: 'create-items-table',
    text: `CREATE TABLE IF NOT EXISTS items_table
           (
               id                       SERIAL PRIMARY KEY,
               item_name                varchar(255) NOT NULL,
               description              varchar(255),
               price                    DECIMAL,
               image_link               text,
               material                 varchar(255),
               size                     size
            )`,
};

const createCategoryTable = {                                            //tag    //run prima   /run a doua
    name: 'create-category-table',
    text: `CREATE TABLE IF NOT EXISTS category_table
           (
               id                  SERIAL PRIMARY KEY,
               category_name       varchar(255) UNIQUE,                 
               description         varchar(255)                      
           )`,
};

const createItemsDetailsTable = {                                                     //run a patra   /data aditionale
    name: 'create-details-table',
    text: `CREATE TABLE IF NOT EXISTS items_details_table
           (    
               item_id                   INTEGER,
               serial_number             BIGINT UNIQUE,
               lot_number                BIGINT UNIQUE,
               PRIMARY KEY               (item_id),  
               CONSTRAINT fk_item_id FOREIGN KEY(item_id) REFERENCES items_table(id) ON DELETE CASCADE
           )`,
};

const createItemsCategoriesTable = {                                   //article-tag    // run a treia  //
    name: 'create-items-categories-table',
    text: `CREATE TABLE IF NOT EXISTS item_categories 
            (
            item_id        INTEGER NOT NULL,
            category_id    INTEGER NOT NULL,
            PRIMARY KEY (item_id, category_id),  
            CONSTRAINT fk_item_id FOREIGN KEY(item_id) REFERENCES items_table(id),   
            CONSTRAINT fk_category FOREIGN KEY(category_id) REFERENCES category_table(id)
           )`,
};


module.exports = {
    createSchema,
    createItemsTable,
    createCategoryTable,
    createItemsDetailsTable,
    createSizeEnum,
    createItemsCategoriesTable,
};

