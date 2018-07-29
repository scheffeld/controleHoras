module.exports = function(app){

    app.get('/cad_func', function(req, res){
        res.render('cad_func');
    });

   app.get('/cad_ponto', function(req, res){
        res.render('cad_ponto');        
    });

};