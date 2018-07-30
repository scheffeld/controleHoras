module.exports = function(app){
    var fs = require('fs');

    app.get('/relatorios', function(req, res){
        res.render('relatorios');
    });

    app.post('/relatorios/funcionarios', function(req, res){
        var email = req.body
        var caminho = 'C:/Users/ro_scheffeld/Downloads/controleHoras/funcionarios.csv'

        var connection  = app.config.dbConnection();
        var models = app.app.models.export;
        var mail = app.app.models.mail;

        fs.unlinkSync(caminho);
        
        models.relatorioFuncionarios(connection, function(error, result){
            var arquivoRelatorio = fs.readFileSync(caminho);
            mail.relatorioFuncionarios(email.email);
            res.redirect('/relatorios');
        })
    })

    app.post('/relatorios/pontos', function(req, res){
        var email = req.body
        var caminho = 'C:/Users/ro_scheffeld/Downloads/controleHoras/pontos.csv'

        var connection  = app.config.dbConnection();
        var models = app.app.models.export;
        var mail = app.app.models.mail;

        fs.unlinkSync(caminho);
        
        models.relatorioPontos(connection, function(error, result){
            var arquivoRelatorio = fs.readFileSync(caminho);
            mail.relatorioPontos(email.email);
            res.redirect('/relatorios');
        })
    })

};