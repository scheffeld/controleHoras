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

    var upperCase = require('upper-case')

    app.get('/register', function(req, res){
        res.render('register');
    });

    app.post('/register/cadastro', function(req, res){
        var user = req.body

        user.nome = upperCase(user.nome)
        user.cargo = upperCase(user.cargo)
        user.setor = upperCase(user.setor)
        user.superv = upperCase(user.superv)
        user.password = encrypt(user.password);

        var connection = app.config.dbConnection();
        var models = app.app.models.insert();

        models.registrar(user, connection, function(result, error){
            if (error == true){
                console.log(error)
                res.redirect('/register')
            } else {
                res.redirect('/login')
            }
        })
    })

    app.get('/register/dados', function(req, res){
        var connection = app.config.dbConnection()
        var models = app.app.models.register()

        models.dados(connection, function(error, result){
            res.json(result)
        })
    })
};