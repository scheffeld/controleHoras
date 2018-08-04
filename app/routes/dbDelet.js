module.exports = function(app){

    app.post('/edit_func/delete', function(req, res){
        var funcionario = req.body

        var connection  = app.config.dbConnection();
        var models = app.app.models.delete;
        var mail = app.app.models.mail
        mail.deleteFuncionario(funcionario);

        models.excluirFuncionario(funcionario, connection, function(error, result){
            if(error){
                console.log(error)
                res.redirect('/edit_func');
            } else {
                console.log('Editar/Excluir Funcionario Renderizado!')
                res.redirect('/edit_func');
            }
        });
    })

    app.post('/edit_ponto/delete', function(req, res){
        var ponto = req.body

        var connection  = app.config.dbConnection();
        var models = app.app.models.delete;
        var mail = app.app.models.mail;
        var select = app.app.models.select;

        select.recuperarFuncionario(connection, function(error, result){
            var funcionario = result;
            for (i = 0; i < funcionario.length; i++){
                if (funcionario[i].id_func == ponto.id_func){
                    var email = funcionario[i].email;
                    mail.deletePonto(ponto, email);                    
                }
            }
        })

        models.excluirPonto(ponto, connection, function(error, result){
            if(error){
                console.log(error)
                res.redirect('/edit_ponto')
            } else {
                console.log('Sucesso!')
                res.redirect('/edit_ponto')
            }
        });
    })

};