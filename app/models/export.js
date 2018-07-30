module.exports = function(){   
    
    this.relatorioFuncionarios = function(connection, callback){
        connection.query("SELECT * FROM funcionarios INTO OUTFILE 'C:/Users/ro_scheffeld/Downloads/controleHoras/funcionarios.csv'", callback);
    };

    this.relatorioPontos = function(connection, callback){
        connection.query("SELECT * FROM pontos INTO OUTFILE 'C:/Users/ro_scheffeld/Downloads/controleHoras/pontos.csv'", callback);
    };
    
    return this;
}