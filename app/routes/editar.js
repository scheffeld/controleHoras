module.exports = function(app){

    app.get('/edit_func', function(req, res){
        res.render('edit_func');
    });

   app.get('/edit_ponto', function(req, res){
        res.render('edit_ponto');        
    });

}