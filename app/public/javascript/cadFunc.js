// Adicionando funções aos botoes de salvar e cancelar
var limpar = $("#limpar");
var salvar = $("#salvar");

// Alerta
var alerta = $("#alertaCampo");
var nomeVazio = '<a class="col-12">Campo <strong>Nome</strong> vazio</a>'
var cargoVazio = '<a class="col-12">Campo <strong>Cargo</strong> vazio</a>'
var setorVazio = '<a class="col-12">Campo <strong>Setor</strong> vazio</a>'
var supervVazio = '<a class="col-12">Campo <strong>Supervisor</strong> vazio</a>'
var cargaVazio = '<a class="col-12">Campo <strong>Carga</strong> vazio</a>'
var emailVazio = '<a class="col-12">Campo <strong>Email</strong> vazio</a>'
alerta.hide();

// Bucanado valores dos campos
var nome = $("#nome");
var cargo = $("#cargo");
var setor = $("#setor");
var superv = $("#superv");
var carga = $("#carga");
var email = $("#email");
var closeAlerta = '<button type="button" class="close" id="fecharAlerta"><span aria-hidden="true">&times;</span></button>'
var fecharAlerta = $("#fecharAlerta")

limpar.click(function(e){
    e.preventDefault();
    nome.val('');
    cargo.val('');
    setor.val('');
    superv.val('');
    carga.val('');
    email.val('');
})

alerta.click(function(){
    alerta.hide();
})

salvar.click(function(e){
    alerta.empty();
    if (nome.val() == '' || nome.val() == null){
        e.preventDefault();
        alerta.append(nomeVazio)
        alerta.show();
    };
    if (cargo.val() == '' || cargo.val() == null){
        e.preventDefault();
        alerta.append(cargaVazio)
        alerta.show();
    };
    if (setor.val() == '' || setor.val() == null){
        e.preventDefault();
        alerta.append(setorVazio)
        alerta.show();
    };
    if (superv.val() == '' || superv.val() == null){
        e.preventDefault();
        alerta.append(supervVazio)
        alerta.show();
    };
    if (carga.val() == '' || carga.val() == null){
        e.preventDefault();
        alerta.append(cargaVazio)
        alerta.show();
    };
    if (email.val() == '' || email.val() == null){
        e.preventDefault();
        alerta.append(emailVazio)
        alerta.show();
    };
})