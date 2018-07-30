module.exports = function(){   
    
    this.updateFuncionario = function(funcionario, connection, callback){
        connection.query('UPDATE funcionarios SET ? WHERE id_func = ?', [funcionario, funcionario.id_func], callback);
    };

    this.updatePonto = function(ponto, connection, callback){
        connection.query('UPDATE pontos SET ? WHERE id_func = ?', [ponto, ponto.id_ponto], callback);
    };
    
    return this;
}