module.exports = function(app){
    
    var upperCase = require("upper-case");

    var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

    function encrypt(text){
        var cipher = crypto.createCipher(algorithm,password)
        var crypted = cipher.update(text,'utf8','hex')
        crypted += cipher.final('hex');
        return crypted;
    }
    
    function decrypt(text){
        var decipher = crypto.createDecipher(algorithm,password)
        var dec = decipher.update(text,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    }

    app.post('/cad_func/salvar', function(req, res){
        var funcionario = req.body;

        funcionario.nome = upperCase(funcionario.nome);
        funcionario.cargo = upperCase(funcionario.cargo);
        funcionario.setor = upperCase(funcionario.setor);
        funcionario.superv = upperCase(funcionario.superv);

        var connection  = app.config.dbConnection();
        var models = app.app.models.insert;
        var mail = app.app.models.mail
        mail.cadFuncionario(funcionario);

        models.salvarFuncionario(funcionario, connection, function(error, result){
            if(error){
                console.log(error)
                res.redirect('/cad_func');
            } else {
                console.log('Cadastro de Funcionarios Renderizado!')
                res.redirect('/cad_func');
            }
        });
    });

   app.post('/cad_ponto/salvar', function(req, res){
        var pontos = req.body;
        var funcionario = '';

        var connection  = app.config.dbConnection();
        var models = app.app.models.insert;
        var select = app.app.models.select;
        var mail = app.app.models.mail;
        
        select.recuperarFuncionario(connection, function(error, result){
            funcionario = result;
            for (i = 0; i < funcionario.length; i++){
                if (funcionario[i].id_func == pontos.id_func){
                    var email = funcionario[i].email;
                    mail.cadPonto(pontos, email);                    
                }
            }
        })

        models.salvarPonto(pontos, connection, function(error, result){
            if(error){
                console.log(error)
                res.redirect('/cad_ponto');
            } else {
                res.redirect('/cad_ponto');
                console.log('Cadastro de Ponto Renderizado')
            }
        });
    });

    app.post('/register/cadastro', function(req, res){
        var user = req.body

        user.nome = upperCase(user.nome);
        user.cargo = upperCase(user.cargo);
        user.setor = upperCase(user.setor);
        user.superv = upperCase(user.superv);
        user.carga = upperCase(user.carga);
        user.password = encrypt(user.password);

        
        var connection = app.config.dbConnection();
        var models = app.app.models.insert;
        var mail = app.app.models.mail;

        models.salvarUser(user, connection, function(error, result){
            if(error){
                console.log(error);
                res.send(user)
            } else {
                res.redirect('/home');
                console.log('Home renderizado com sucesso!')
            }
        })


    })

};