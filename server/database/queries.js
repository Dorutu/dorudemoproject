// SEARCHES
'use-strict'


const searchByLotNumber = {
    name: 'search-by-lot-number',
    text: `SELECT *
           FROM items_table i
           INNER JOIN items_details_table id ON id.item_id = i.item_id
           WHERE id.lot_number = $1`,
};

const searchBySerialNumber = {
    name: 'search-by-serial-number',
    text: `SELECT *
           FROM items_table i
           INNER JOIN items_details_table id ON id.item_id = i.item_id
           WHERE id.serial_number = $1`,
};

const searchByItemNameV1 = {
    name: 'search-by-item-name',
    text: `SELECT *
           FROM items_table i
           INNER JOIN items_details_table id ON id.item_id = i.item_id
           WHERE LOWER(id.name) = LOWER($1)`,       
};


const searchByItemNameV2 = {
    name: 'search-by-item-name',
    text: `SELECT *
           FROM items_table i
           INNER JOIN items_details_table id ON id.item_id = i.item_id
           WHERE id.name ILIKE $1`,       
};



// Get all

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


const getAllDetails = {
    name: 'get-all-details',
    text: `SELECT *
           FROM items_details_table`,
};


// CRUD

// create

const insertItemsTable = {
    name: 'create-item',
    text: `INSERT INTO items_table (name, description, price, image_link, material, size)
           VALUES ($1, $2, $3, $4, $5, $6)`,
};

const insertCategoriesTable = {
    name: 'create-category',
    text: `INSERT INTO category_table(name, description)
        VALUES($1, $2)`
};

const insertItemsDetailsTable = {
    name: 'create-items-details',
    text: `INSERT INTO items_details_table(item_id, serial_number, lot_number)
            VALUES($1, $2, $3)`,
};

const insertItemCateogry = {
    name: 'insert-items-categories',
    text: `INSERT INTO item_categories(item_id, category_id)
          VALUES($1, $2)`,
};


// read


const getItem = {
    name: 'get-item',
    text: `SELECT *
           FROM items_table
           WHERE id = $1`,
};

const getCategory = {
    name: 'get-category',
    text: `SELECT *
           FROM category_table
           WHERE category_name = $1`,
};

const getItemDetailsByItemId = {
    name: 'get-item-details',
    text: `SELECT *
           FROM items_details_table
           WHERE item_id = $1`,
};


// Update



const updateCategory = {
    name: 'update-category-by-id',
    text: `UPDATE category_table
           SET category_name = $1
               description = $2
           WHERE category_id = $3`,
};



const updateItemDetails ={
    name: 'update-item-details-by-id',
    text: `UPDATE items_details_table
           SET serial_number = $1
               lot_number = $2
            WHERE item_id = $3`,

};

const updateItem = {
    name: 'update-item-by-id',
    text: `UPDATE items_table
           SET item_name = $1
               description = $2
               price = $3
               image_link = $4
               material = $5
               size = $6
           WHERE item_id = $7`,
           
};

// delete
const deleteItem = {
    name: 'deleteItembyId',
    text: `DELETE FROM items_table
           WHERE item_id = $1`,
};

const deleteCategory = {
    name: 'delete-category',
    text: `DELETE 
           FROM category_table
           WHERE category_id = $1`,
};



const deleteItemDetails = {
    name: 'delete-item-details',
    text: `DELETE FROM items_details_table
           WHERE item_id = $1
                 serial_number = $2
                 lot_number = $3`,
};



const updateCategoryAssigned = {
    name: 'update-category-assigned',
    text: `UPDATE item_categories
           SET category_id = $1
           WHERE item_id = $2
                 category_id = $3,`
};




module.exports = {
    searchByLotNumber,
    searchBySerialNumber,
    searchByItemNameV1,
    searchByItemNameV2,
    getAllItems,
    getAllCategories,
    getAllDetails,
    insertItemsTable,
    insertCategoriesTable,
    insertItemsDetailsTable,
    getItem,
    getCategory,
    getItemDetailsByItemId,
    updateCategory,
    updateItemDetails,
    updateItem,
    deleteItem,
    deleteCategory,
    deleteItemDetails,
    insertItemCateogry,
    updateCategoryAssigned,
};