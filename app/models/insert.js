module.exports = function(){   
    
    this.salvarFuncionario = function(funcionario, connection, callback){
        connection.query('INSERT INTO funcionarios SET ?', funcionario, callback);
    };

    this.salvarPonto = function(ponto, connection, callback){
        connection.query('INSERT INTO pontos SET ?', ponto, callback);
    };
    
    return this;
}