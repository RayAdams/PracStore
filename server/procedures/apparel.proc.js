var db = require('../config/db');

//match to DB stored procedures
exports.all = function() {
    return db.rows('GetApparels');
}
exports.read = function(id) {
    return db.row('GetApparel', [id]);
}