module.exports = function(){

    this.registrar = function(user, connection, callback){
        connection.query('INSERT INTO users SET ?', user, callback);
    }
    
    return this;
}