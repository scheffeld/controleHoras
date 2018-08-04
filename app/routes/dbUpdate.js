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
            if(error){
                console.log(error)
                res.redirect('/edit_func');
            } else {
                console.log('Sucesso!')
                res.redirect('/edit_func');
            }
        });
    })

    app.post('/edit_ponto/update', function(req, res){
        var ponto = req.body
        var funcionario = ''

        ponto.id_func = parseInt(ponto.id_func);
        ponto.id_ponto = parseInt(ponto.id_ponto);


        var connection  = app.config.dbConnection();
        var models = app.app.models.update;
        var mail = app.app.models.mail
        var select = app.app.models.select;

        select.recuperarFuncionario(connection, function(error, result){
            funcionario = result;
            for (i = 0; i < funcionario.length; i++){
                if (funcionario[i].id_func == ponto.id_func){
                    var email = funcionario[i].email;
                    mail.updatePonto(ponto, email);                    
                }
            }
        })

        models.updatePonto(ponto, connection, function(error, result){
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