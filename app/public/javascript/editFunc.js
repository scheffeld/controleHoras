// Requisição de dados do BD através do Axios
// Criando função que acessa a API
function dbFuncionarios(){
    return axios.get("http://localhost:3000/select_funcionarios")
}

// Criando variavel que vai ser trabalhada com o .then
var dadosFuncionarios = "";

// Atribuindo a Função da API pra um variavel
dadosFuncionarios = dbFuncionarios();

// Requisitando dados para a API e trabalhando com eles na página de gerenciamento de funcionario
dadosFuncionarios.then(function(resposta){
    // Atribuindo os dados recebidos à um objeto
    var funcionarios = resposta.data;
    // Recuperando a tabela
    var tbody = $("#tbodyFuncionarios");
    
    // For para adicionar os nomes as linhas
    for (i = 0; i < funcionarios.length; i++){
        // Criando variavel para a linha
        var tr = $('<tr class="medium" style="font-size: 12px;"></tr>');
        // Adicionando os valores na tabela
        tr.append('<td class="text-center">'+ funcionarios[i].id_func +'</td>')
        tr.append('<td class="text-center">'+ funcionarios[i].nome +'</td>')
        tr.append('<td class="text-center">'+ funcionarios[i].cargo +'</td>')
        tr.append('<td class="text-center">'+ funcionarios[i].setor +'</td>')
        tr.append('<td class="text-center">'+ funcionarios[i].superv +'</td>')
        tr.append('<td class="text-center">'+ (funcionarios[i].carga).slice(0, 5) +'</td>')
        tr.append('<td class="text-center">'+ funcionarios[i].email +'</td>')
        tbody.append(tr);
    };

    // Alternando entre as abas
    var lista = $("#listaFuncionarios");
    var editar = $("#editarFuncionarios");
    var tabela = $("#tabela");
    var form = $("#form");
    form.hide();
    tabela.show();

    lista.css('cursor', 'default')
    editar.css('cursor', 'default')

    lista.click(function(){
        tabela.hide();
        form.show();
        lista.addClass("active");
        editar.removeClass("active");
    });

    editar.click(function(){
        tabela.show();
        form.hide();
        editar.addClass("active");
        lista.removeClass("active");
    });

    // Alterando a rota dos dados (Atualizar e Excluir)
    var nome = $("#nome");
    var deleteFuncionario = $("#excluir");
    var updateFuncionario = $("#atualizar");
    var form = $("#form");
    var carga = $("#carga");
    var cargo = $("#cargo");
    var superv = $("#superv");
    var setor = $("#setor");
    var email = $("#email");
    var id_func = $("#id_func")

    id_func.css('cursor', 'not-allowed')

    // Adicionando nomes dos funcionarios
    for (i = 0; i < funcionarios.length; i++){
        nome.append('<option value="' + funcionarios[i].nome + '">' + funcionarios[i].nome + '</option>')
    }

    

    // Alerta
    var alerta = $("#alertaCampo");
    var nomeVazio = '<a class="col-12">Campo <strong>Nome</strong> vazio</a>'
    var cargoVazio = '<a class="col-12">Campo <strong>Cargo</strong> vazio</a>'
    var setorVazio = '<a class="col-12">Campo <strong>Setor</strong> vazio</a>'
    var supervVazio = '<a class="col-12">Campo <strong>Supervisor</strong> vazio</a>'
    var cargaVazio = '<a class="col-12">Campo <strong>Carga</strong> vazio</a>'
    var emailVazio = '<a class="col-12">Campo <strong>Email</strong> vazio</a>'
    alerta.hide();

    // Mensagens de alerta caso campo vazio
    var alerta = $("#alertaCampo");
    var closeAlerta = '<button type="button" class="close" id="fecharAlerta"><span aria-hidden="true">&times;</span></button>'
    var fecharAlerta = $("#fecharAlerta")

    // Fechando alerta  
    alerta.click(function(){
        alerta.hide();
    })

    updateFuncionario.click(function(e){
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
        form.attr('action', '/edit_func/update');
    });

    deleteFuncionario.click(function(e){
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
        form.attr('action', '/edit_func/delete');
    });

    nome.change(function(){
        for (i =0; i < funcionarios.length; i++){
            if (nome.val() == funcionarios[i].nome){
                id_func.val(funcionarios[i].id_func)
            }
            if (funcionarios[i].id_func == id_func.val()){
                cargo.val(funcionarios[i].cargo);
                setor.val(funcionarios[i].setor);
                superv.val(funcionarios[i].superv);
                carga.val((funcionarios[i].carga).slice(0, 5));
                email.val(funcionarios[i].email);
            }
        }
    });


});