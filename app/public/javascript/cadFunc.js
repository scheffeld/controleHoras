// Adicionando funções aos botoes de salvar e cancelar
var limpar = $("#limpar");
var salvar = $("#salvar");

// Alerta
var alerta = $("#alertaCampo");

// Bucanado valores dos campos
var nome = $("#nome");
var cargo = $("#cargo");
var setor = $("#setor");
var superv = $("#superv");
var carga = $("#carga");
var email = $("#email");

// Definindo alerta como .hide()
alerta.hide();


// Limpando campos quando botão Limpar é pressionado
limpar.click(function(e){
    e.preventDefault();
    nome.val('');
    cargo.val('');
    setor.val('');
    superv.val('');
    carga.val('');
    email.val('');
})

// Fechando alerta quando clicado nele
alerta.click(function(){
    alerta.hide();
})

//  Função para verificar o campo vazio
var verificarCampo = function(nomeCampo, alertaCampo, e){
    if (nomeCampo.val() == '' || nomeCampo.val() == null || nomeCampo.val() == 'vazio'){
        e.preventDefault();
        alerta.append('<a class="col-12">Campo <strong>'+ alertaCampo +'</strong> vazio</a>')
        alerta.show();
    };
}

// Verificando campos vazios e salvando os dados
salvar.click(function(e){
    alerta.empty();
    verificarCampo(nome, 'Nome', e);
    verificarCampo(cargo, 'Cargo', e);
    verificarCampo(setor, 'Setor', e);
    verificarCampo(superv, 'Supervisor', e);
    verificarCampo(carga, 'Carga', e);
    verificarCampo(email, 'Email', e);
})