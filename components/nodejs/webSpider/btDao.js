const mysql = require('mysql');
const $conf = require('./db');
const $util = require('./util');
const $sql = require('./btSqlMapping');

const pool = mysql.createPool($util.extend({}, $conf.mysql));

const jsonWrite = (res, ret) => {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
}

module.exports = {
    add: (req, res, next) => {
        let param = req.body;
        pool.getConnection((err, connection) => {
            // 建立连接，向表中插入值
            // INSERT INTO user(id, title, url) VALUES(0,?,?)，
            connection.query($sql.insert, [param.title, param.url], (err, result) => {
                if(result) {
                    result = {
                        code: 200,
                        msg: '增加成功'
                    };
                }
                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);
    
                // 释放链接
                connection.release();
            });
        });
    }
};