var db = require('../config/db');

//match to DB stored procedures
exports.all = function() {
    return db.rows('GetCategories');
}