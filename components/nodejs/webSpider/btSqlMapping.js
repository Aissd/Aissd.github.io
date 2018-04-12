// CRUD SQL语句 - 更删改查
module.exports = {
    insert: 'INSERT INTO bt(id, title, url) VALUES(0,?,?)',
    update: 'UPDATE bt SET title=?,url=? WHERE id=?',
    delete: 'DELETE FROM bt WHERE id=?',
    queryById: 'SELECT * FROM bt WHERE id=?',
    queryAll: 'SELECT * FROM bt'
};