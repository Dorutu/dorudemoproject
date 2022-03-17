

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



const getItem = {
    name: 'get-item',
    text: `SELECT *
           FROM items_table
           WHERE item_name = $1`,
};

const updateItem = {
    name: 'update-item',
    text: `UPDATE items_table
           SET item_name = $1
               description = $2
               price = $3
               image_link = $4
               material = $5
               size = $6`,
};

const deleteItem = {
    name: 'delete-item',
    text: `DELETE FROM items_table
           WHERE item_name = $1
                 description = $2
                 price = $3
                 image_link = $4
                 material = $5
                 size = $6`,
};

const getCategory = {
    name: 'get-category',
    text: `SELECT *
           FROM category_table
           WHERE category_name = $1`,
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






const createItem = {
    name: 'create-item',
    text: `INSERT INTO items_table (item_name, description, price, image_link, material, size)
           VALUES ($1, $2, $3, $4, $5, $6)`,
};


const createCategory = {
    name: 'create-category',
    text: `INSERT INTO category_table(category_name, description)
        VALUES($1, $2)`
};


const insertItemCateogry = {
    name: 'insert-items-categories',
    text: `INSERT INTO item_categories(item_id, category_id)
          VALUES($1, $2)`
};

    
const createItemsDetails = {
    name: 'create-items-details',
    text: `INSERT INTO items_details_table(serial_number, lot_number)
            VALUES($1, $2)`
};


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


const getLotNumber = {
    name: 'get-lot-number',
    text: `SELECT *
           FROM items_details_table
           WHERE lot_number = $1`
};

const getSerialNumber = {
    name: 'get-serial-number',
    text: `SELECT *
           FROM items_details_table
           WHERE serial_number = $1`
};

const searchItem = {
    name: 'search-item',
    text: `SELECT *
           FROM items_table
           WHERE lower(item_name) = LOWER($1)`,
}

const updateItemById = {
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

const updateCategoryById = {
    name: 'update-category-by-id',
    text: `UPDATE category_table
           SET category_name = $1
               description = $2
           WHERE category_id = $3`,
};

const updateItemDetailsById ={
    name: 'update-item-details-by-id',
    text: `UPDATE items_details_table
           SET serial_number = $1
               lot_number = $2
            WHERE item_id = $3`,

};

const deleteItemById = {
    name: 'deleteItembyId',
    text: `DELETE FROM items_talbe
           WHERE item_id = $1`,
};

//delele categorie fara sa atingi items

const deleteCategoryById = {
    name: 'delete-category-by-id',
    text: `DELETE FROM item_categories
           WHERE category_id = $1`,
};

//permit unasign item si categorie
const unasignItem = {
    name: 'unasign-item',
    text: `DELETE FROM items_table
           WHERE item_id = $1`,
};

const unasignCategory = {
    name: 'unasign-category',
    text: `DELETE FROM category_table
            WHERE id = $1`,
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