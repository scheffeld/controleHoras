module.exports = function(){   
    
    this.excluirFuncionario = function(funcionario, connection, callback){
        connection.query('DELETE FROM funcionarios WHERE id_func = ? ', funcionario.id_func, callback);
    };

    this.excluirPonto = function(ponto, connection, callback){
        connection.query('DELETE FROM pontos WHERE id_ponto = ?', ponto.id_ponto, callback);
    };
    
    return this;
}