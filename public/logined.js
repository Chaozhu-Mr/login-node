const connection = require('../middle/main')();
module.exports = (req, res) => {
    connection.query('select * from test where user=? and password=?', [req.body.user, req.body.password], (err, result) => {
        if (err) {
            res.send({code: 1, msg: '登录失败!'});
        } else {
            if (result.length > 0) {
                res.send({code: 0, msg: '登录成功!'});
            } else {
                res.send({code: 2, msg: '请先注册!'});
            }
        }
    });
}