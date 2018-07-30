module.exports = function(app){

    app.post('/edit_func/delete', function(req, res){
        var funcionario = req.body

        var connection  = app.config.dbConnection();
        var models = app.app.models.delete;

        models.excluirFuncionario(funcionario, connection, function(error, result){
            if(error){
                console.log(error)
                res.redirect('/edit_func');
            } else {
                console.log(result)
                res.redirect('/edit_func');
            }
        });
    })

    app.post('/edit_ponto/delete', function(req, res){
        var ponto = req.body
        var connection  = app.config.dbConnection();
        var models = app.app.models.delete;

        models.excluirPonto(ponto, connection, function(error, result){
            if(error){
                console.log(error)
                res.redirect('/edit_ponto')
            } else {
                console.log(result)
                res.redirect('/edit_ponto')
            }
        });
    })

};