module.exports = function(app){
    var fs = require('fs');

    app.get('/relatorios', function(req, res){
        res.render('relatorios');
    });

    app.post('/relatorios/funcionarios', function(req, res){
        var email = req.body

        var connection  = app.config.dbConnection();
        var models = app.app.models.export;
        var mail = app.app.models.mail;
        fs.unlinkSync('C:/Users/ro_scheffeld/Downloads/controleHoras/funcionarios.csv');

        models.relatorioFuncionarios(connection, function(error, result){
            var arquivoRelatorio = fs.readFileSync('C:/Users/ro_scheffeld/Downloads/controleHoras/funcionarios.csv');
            res.redirect('/relatorios');
        })
    })

    app.post('/relatorios/pontos', function(req, res){
        var email = req.body

        var connection  = app.config.dbConnection();
        var models = app.app.models.export;

        models.relatorioPontos(connection, function(error, result){
            res.send(result);
        })
    })

};