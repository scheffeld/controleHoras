module.exports = function(app){

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
    
    app.post('/login/logar', function(req, res){
        var user = req.body

        // user.password = encrypt(user.password);

        var connection = app.config.dbConnection();
        var models = app.app.models.select();

        models.logar(user, connection, function(error, result){
            if (error){
                console.log(error)
            } else {
                console.log('Logado');
                nome = result.nome;
                res.render('home', result);
            }
        })

    })

};