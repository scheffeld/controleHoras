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

    app.get('/login', function(req, res){
        res.render('login');
    });

    app.get('/register', function(req, res){
        res.render('register');
    });

    app.post('/login/logar', function(req, res){
        var user = req.body

        user.password = encrypt(user.password);

        var connection = app.config.dbConnection();
        var models = app.app.models.select();

        models.logar(user, connection, function(error, result){
            if (error){
                console.log(error)
            } else {
                console.log('Logado');
                res.render('home', result);
            }
        })

    })
};