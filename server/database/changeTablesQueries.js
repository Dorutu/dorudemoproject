// const createSizeEnum = {
//     name: 'create-size-enum',
//     text: `CREATE TYPE size AS ENUM ('small', 'medium', 'large')`
// };

const createItemsTable = {
    name: 'create-items-table',
    text: `CREATE TABLE IF NOT EXISTS Items_table
           (
               item_name_id             SERIAL PRIMARY KEY,
               item_name                varchar(255) NOT NULL,
               category                 varchar(255)  NOT NULL,
               price                    INTEGER NOT NULL,
               image_link               text,
               material                 varchar(255),
               size                     size

           )`,
};

// module.exports = {
//     createSizeEnum,
//     createItemsTable,
// };