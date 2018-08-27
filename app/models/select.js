module.exports = function(){

    this.logar = function(user, connection, callback){
        connection.query('SELECT nome, email FROM users WHERE email = ? AND password = ?', [user.email, user.password], callback);
    }
    
    return this;
}