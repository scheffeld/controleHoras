module.exports = function(app){

    app.get('/login', function(req, res){
        res.render('login');
    });

    app.get('/register', function(req, res){
        res.render('register');
    });

};