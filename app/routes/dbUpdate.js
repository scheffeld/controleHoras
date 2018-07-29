module.exports = function(app){

    app.post('/edit_func/update', function(req, res){
        var funcionario = req.body;
        var upperCase = require('upper-case');

        funcionario.nome = upperCase(funcionario.nome);
        funcionario.cargo = upperCase(funcionario.cargo);
        funcionario.setor = upperCase(funcionario.setor);
        funcionario.superv = upperCase(funcionario.superv);

        var connection  = app.config.dbConnection();
        var models = app.app.models.update;
        var mail = app.app.models.mail

        mail.updateFuncionario(funcionario);

        models.updateFuncionario(funcionario, connection, function(error, result){
            res.redirect('/edit_func');
        });
    })

    app.post('/edit_ponto/update', function(req, res){
        var ponto = req.body

        var connection  = app.config.dbConnection();
        var models = app.app.models.update;

        models.updatePonto(ponto, connection, function(error, result){
            res.render(ponto)
        });
    })

};