module.exports = function(){

    this.logar = function(user, connection, callback){
        connection.query('SELECT nome FROM users WHERE email = ? AND password = ?', [user.email, user.password], callback);
    }
    
    return this;
}