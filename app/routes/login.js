module.exports = function(app){

    app.get('/login', function(req, res){
        res.render('login');
    });

    app.get('/register', function(req, res){
        res.render('register');
    });

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
                res.render('home', result);
            }
        })

    })
};