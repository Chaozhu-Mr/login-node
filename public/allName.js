const connection = require('../middle/main')();
module.exports = (req, res) => {
    connection.query('select * from test', (err, result) => {
        if (err) {
            res.status(500).send('服务器异常!');
        } else {
            res.render('allName', {
                data: result
            });
        }
    });
};