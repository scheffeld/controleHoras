module.exports = function(){   
    
    this.recuperarFuncionario = function(connection, callback){
        connection.query('SELECT * FROM funcionarios', callback);
    };

    this.recuperarPonto = function(connection, callback){
        connection.query('SELECT * FROM pontos', callback);
    };

    this.logar = function(user, connection, callback){
        connection.query('SELECT nome FROM users WHERE email = ? AND password = ?', [user.email, user.password], callback);
    }
    
    return this;
}