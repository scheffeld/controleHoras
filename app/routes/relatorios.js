module.exports = function(app){
    var fs = require('fs');

    app.get('/relatorios', function(req, res){
        res.render('relatorios');
    });

    app.post('/relatorios/funcionarios', function(req, res){
        var email = req.body

        var connection  = app.config.dbConnection();
        var models = app.app.models.select;

        models.recuperarFuncionario(connection, function(error, result){
            res.json(result);
        })
    })

    app.post('/relatorios/pontos', function(req, res){
        var email = req.body

        var connection  = app.config.dbConnection();
        var models = app.app.models.select;

        models.recuperarPonto(connection, function(error, result){
            res.send(result);
        })
    })

};