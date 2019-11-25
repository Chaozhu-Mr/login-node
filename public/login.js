const path = require('path');
module.exports = (req, res) => {
    res.sendFile(path.resolve('view/login.ejs'));
};