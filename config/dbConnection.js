var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'projeto_vaga'
    });
};

module.exports = function(){
    return connMySQL;
}

// dbConnection for macOS