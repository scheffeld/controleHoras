module.exports = function(app){
    
    var upperCase = require("upper-case");

    app.post('/cad_func/salvar', function(req, res){
        var funcionario = req.body;

        funcionario.nome = upperCase(funcionario.nome);
        funcionario.cargo = upperCase(funcionario.cargo);
        funcionario.setor = upperCase(funcionario.setor);
        funcionario.superv = upperCase(funcionario.superv);

        var connection  = app.config.dbConnection();
        var models = app.app.models.insert;
        var mail = app.app.models.mail
        // mail.cadFuncionario(funcionario);

        models.salvarFuncionario(funcionario, connection, function(error, result){
            res.redirect('/cad_func');
        });
    });

   app.post('/cad_ponto/salvar', function(req, res){
        var pontos = req.body;

        var connection  = app.config.dbConnection();
        var models = app.app.models.insert;
        

        models.salvarPonto(pontos, connection, function(error, result){
            res.redirect('/cad_ponto');
        });
    });

};