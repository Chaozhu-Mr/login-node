const mysql = require('mysql');
module.exports = function () {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'test'
    });
    connection.connect((err) => {
        if (err) {
            throw err;
        }
    });
    return connection;
};