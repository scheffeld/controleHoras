module.exports = function(){   
    
    this.recuperarFuncionario = function(connection, callback){
        connection.query('SELECT * FROM funcionarios', callback);
    };

    this.recuperarPonto = function(connection, callback){
        connection.query('SELECT * FROM pontos', callback);
    };
    
    return this;
}