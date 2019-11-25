const connection = require('../middle/main')();
module.exports = (req, res) => {
    const obj = req.query;
    connection.query('select * from test where user=?', [obj.user], (err, result) => {
        if (err) {
            res.send({code: 1, msg: '注册失败!'});
        } else if (result.length > 0) {
            res.send({code: 2, msg: '该用户名已被注册!'});
        } else {
            connection.query('insert into test(user, password) values("' + obj.user + '", "' + obj.password + '")');
            res.send({code: 3, msg: '注册成功!'});
        }
    });
};