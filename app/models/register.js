module.exports = function(){

    this.dados = function(connection, callback){
        connection.query('SELECT nome, email FROM users', callback);
    }

    return this;
}