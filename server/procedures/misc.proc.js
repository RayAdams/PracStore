var db = require('../config/db');

//match to DB stored Procedures
exports.all = function() {
    return db.rows('GetMiscs');
}
exports.read = function(id) {
    return db.row('GetMisc', [id]);
}