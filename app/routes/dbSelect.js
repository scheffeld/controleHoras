module.exports = function(app){

    app.get('/select_funcionarios', function(req, res){
        var connection  = app.config.dbConnection();
        var models = app.app.models.select;

        models.recuperarFuncionario(connection, function(error, result){
            if(error){
                console.log(error)
            } else {
                console.log('Sucesso!')
                res.json(result)
            }
        });
    })

    app.get('/select_pontos', function(req, res){
        var connection  = app.config.dbConnection();
        var models = app.app.models.select;

        models.recuperarPonto(connection, function(error, result){
            if(error){
                console.log(error)
            } else {
                console.log('Sucesso!')
                res.json(result)
            }
        });


    })

};