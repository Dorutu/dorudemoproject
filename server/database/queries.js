const getAllItems = {
    name: 'get-all-items',
    text: `SELECT *
           FROM items_table`,
};

const getAllCategories = {
    name: 'get-all-categories',
    text: `SELECT *
           FROM category_table`,
};

const searchByLotNumber = {
    name: 'search-by-lot-number',
    text: `SELECT *
           FROM items_details_table
           WHERE LOWER(lot_number) LIKE '%'`,
};

const searchBySerialNumber = {
    name: 'search-by-serial-number',
    text: `SELECT *
           FROM items_datails_table
           WHERE LOWER(serial_number) LIKE '%'`,
};

const searchByItemName = {
    name: 'search-by-item-name',
    text: `SELECT *
           FROM items_table
           WHERE LOWER(item_name) LIKE '%'`,
};

const createItem = {
    name: 'create-item',
    text: `INSERT INTO items_table (item_name, fk_category_name_id, price, image_link, material, size, fk_item_details_id)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
};

const getItem = {
    name: 'get-item',
    text: `SELECT *
           FROM items_table
           WHERE item_name_id = $1`,
};

const updateItem = {
    name: 'update-item',
    text: `UPDATE items_table
           SET item_name = $1
               fk_category_name_id  = $2
               price = $3
               image_link = $4
               material = $5
               size = $6
               fk_item_details_id = $7`,
};

const deleteItem = {
    name: 'delete-item',
    text: `DELETE FROM items_table
           WHERE item_name = $1
                 fk_category_name_id = $2
                 price = $3
                 image_link = $4
                 material = $5
                 size = $6
                 fk_item_details_id = $7`,
};

const createCategory = {
    name: 'create-category',
    text: `INSERT into category_table (category_name, description)
           VALUES ($1, $2)`,
};

const getCategory = {
    name: 'get-category',
    text: `SELECT *
           FROM category_table
           WHERE category_name_id = $1`,
};

const updateCategory = {
    name: 'update-category',
    text: `UPDATE category_table
           SET category_name = $1
               description = $2`,
};

const deleteCategory = {
    name: 'delete-category',
    text: `DELETE FROM category_table
           WHERE category_name = $1
                 description = $2`,
};

const createItemDetails = {
    name: 'create-item-details',
    text: `INSERT INTO items_details_table (serial_number, lot_number)
           VALUES ($1, $2)`,
};

const getItemDetails = {
    name: 'get-item-details',
    text: `SELECT *
           FROM items_details_table
           WHERE item_details_id = $1`,
};

const updateItemDetails = {
    name: 'update-item-details',
    text: `UPDATE items_details_table
           SET serial_number = $1
               lot_number = $2`,
};

const deleteItemDetails = {
    name: 'delete-item-details',
    text: `DELETE FROM items_details_table
           WHERE serial_number = $1
                 lot_number = $2`,
};

const AddCategoryData = {
    name: 'add-category-data',
    text: `INSERT INTO category_table (category_name, description)
           VALUES ('Usages', 'description one two three')`,
};

const AddDetailsData = {
    name: 'add-details-data',
    text: `INSERT INTO items_details_table (serial_number, lot_number)
           VALUES (11589, 5)`,
};

const addItems = {
    name: 'add-items',
    text: `INSERT INTO items_table (item_name, price, material, size)
           VALUES ('Doru',  120,  'plastic', 'small')`,
};

const updateItemCategory = {
    name: 'update-item-category',
    text: `UPDATE items_table
           SET category_id = 1
           WHERE id = 1`,
};





module.exports = {
    getAllItems,
    getAllCategories,
    searchByLotNumber,
    searchBySerialNumber,
    searchByItemName,
    createItem,
    getItem,
    updateItem,
    deleteItem,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory,
    createItemDetails,
    getItemDetails,
    updateItemDetails,
    deleteItemDetails,
    AddDetailsData,
    AddCategoryData,
    addItems,
    updateItemCategory,
};