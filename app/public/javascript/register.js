axios.get('http://localhost:3000/register/dados').then(function(result){

    var dados = result.data
    
    // Pegando os valores dos campos
    var nome = $("#nome");
    var cargo = $("#cargo");
    var setor = $("#setor");
    var superv = $("#superv");
    var carga = $("#carga");
    var email = $("#email");
    var password = $("#password");
    var passwordConfirm = $("#passwordConfirm");

    // Botão de registrar
    var registerButton = $("#registrar")

    // Recuperando o alerta e inicializando ele oculto
    var senhaDiferente = $("#senhaDiferente");
    var senhaMenor = $("#senhaMenor");
    var nomeExiste = $("#nomeExiste");
    var emailExiste = $("#emailExiste");
    senhaDiferente.hide();
    senhaMenor.hide();
    nomeExiste.hide();
    emailExiste.hide();

    // Função para verificar se o campo não esta vazio
    var naoVazio = function(nomeCampo){
        nomeCampo.change(function(){
            if (nomeCampo.val() != ''){
                nomeCampo.removeAttr("style")
            }
        })
    }

    // Função para verificar se o campo esta vazio
    var verificarCampo = function(nomeCampo, e){
        if (nomeCampo.val() == '' || nomeCampo.val() == null || nomeCampo.val() == 'vazio'){
            e.preventDefault();
            nomeCampo.css({"border-color" : "rgba(255, 0, 0, 0.5)", "background-color" : "rgba(255, 0, 0, 0.25)"})
        };
    }
    // Verificando valor do password
    password.change(function(){
        if ((password.val()).length < 8 && (password.val()).length > 0){
            senhaMenor.show()
            password.css({"border-color" : "rgba(255, 0, 0, 0.5)", "background-color" : "rgba(255, 0, 0, 0.25)"})
        } else {
            senhaMenor.hide()
            password.removeAttr("style")
        } 
    })

    // Verificando valor da confirmação do password
    passwordConfirm.change(function(){
        if (password.val() == passwordConfirm.val() || passwordConfirm.val() == ''){
            senhaDiferente.hide();
            passwordConfirm.removeAttr("style")
        } else if (passwordConfirm.val() != password.val()){
            senhaDiferente.show();
            passwordConfirm.css({"border-color" : "rgba(255, 0, 0, 0.5)", "background-color" : "rgba(255, 0, 0, 0.25)"})
        }
    })

    // Verificando se deu valor aos campos
    naoVazio(nome)
    naoVazio(cargo)
    naoVazio(setor)
    naoVazio(superv)
    naoVazio(carga)
    naoVazio(email)
    naoVazio(password)
    naoVazio(passwordConfirm)

    // Ação do botão de registro
    registerButton.click(function(e){
        verificarCampo(nome, e)
        for (i = 0; i < dados.length; i++){
            var nomeTeste = (nome.val().toUpperCase())
            if (nomeTeste == dados[i].nome){
                nome.css({"border-color" : "rgba(255, 0, 0, 0.5)", "background-color" : "rgba(255, 0, 0, 0.25)"})
                nomeExiste.show()
                e.preventDefault();
                break
            } else {
                nome.removeAttr();
                nomeExiste.hide();
            }
        }
        verificarCampo(cargo, e)
        verificarCampo(setor, e)
        verificarCampo(superv, e)
        verificarCampo(carga, e)
        verificarCampo(email, e)
        for (i = 0; i < dados.length; i++){
            if (email.val() == dados[i].email){
                email.css({"border-color" : "rgba(255, 0, 0, 0.5)", "background-color" : "rgba(255, 0, 0, 0.25)"})
                emailExiste.show()
                e.preventDefault();
                break
            } else {
                email.removeAttr();
                emailExiste.hide();
            }
        }
        verificarCampo(password, e)
        verificarCampo(passwordConfirm, e)
    })


})