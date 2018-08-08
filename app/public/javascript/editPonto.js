// Requisição de dados do BD através do Axios
// Criando função que acessa a API
function dbFuncionarios(){
    return axios.get("http://localhost:3000/select_funcionarios")
}

function dbPontos(){
    return axios.get("http://localhost:3000/select_pontos")
}

// Criando variavel que vai ser trabalhada com o .then
var dadosFuncionarios = "";
var dadosPontos = ""

// Atribuindo a Função da API pra um variavel
dadosFuncionarios = dbFuncionarios();
dadosPontos = dbPontos();

// Requisitando dados para a API e trabalhando com eles na página de cadastro de ponto
dadosFuncionarios.then(function(resposta){
    // Atribuindo os dados recebidos à um objeto
    var funcionarios = resposta.data;
    // Atribuindo elemento à variavel
    var nomeFuncionario = $("#nome");
    // Atribuindo elemento à variavel
    var idFuncionario = $("#id_func");
    var nome = $("#nome");

    // For para adicionar os nomes ao select
    for (i = 0; i < funcionarios.length; i++){
        nomeFuncionario.append('<option value="'+ funcionarios[i].nome +'">'+ funcionarios[i].nome +'</option>')
    };
    // Quando o nome do funcionario mudar, o campo de ID muda também
    nome.change(function(){
        // For para percorrer todos os dados do Objeto
        for(i = 0; i < funcionarios.length; i++){
            // Verifica o nome do funcionario para mostrar a ID
            if (nomeFuncionario.val() == funcionarios[i].nome){
                // Atribui ao elemento o valor da ID
                idFuncionario.val(funcionarios[i].id_func)
            };
        };
    });
});

// Verificações de campos vazios no cadastramento de funcionários
var salvarFunc

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
    var form = $("#funcionarioEditado");
    form.hide();

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
    var deleteFuncionario = $("#deleteFuncionario");
    var updateFuncionario = $("#updateFuncionario");
    var form = $("#form");
    var carga = $("#carga");
    var cargo = $("#cargo");
    var superv = $("#superv");
    var setor = $("#setor");
    var email = $("#email");
    var id_func = $("#id_func")

    updateFuncionario.click(function(){
        form.attr('action', '/edit_func/update');
    });

    deleteFuncionario.click(function(){
        form.attr('action', '/edit_func/delete');
    });

    nome.change(function(){
        for (i =0; i < funcionarios.length; i++){
            if (funcionarios[i].id_func == id_func.val()){
                cargo.val(funcionarios[i].cargo);
                carga.val((funcionarios[i].carga).slice(0, 5));
                email.val(funcionarios[i].email);
                superv.val(funcionarios[i].superv);
                setor.val(funcionarios[i].setor);
            }
        }
    });


});

// Requisitando dados para a API e trabalhando com eles na pagina de gerenciamento de pontos
dadosPontos.then(function(resposta){
    var pontos = resposta.data
    var tabela = $("#tabela");
    var form = $("#form");

    form.hide();

    var updatePonto = $("#updatePonto");
    var deletePonto = $("#deletePonto");

    updatePonto.click(function(){
        form.attr('action', '/edit_ponto/update');
    });

    deletePonto.click(function(){
        form.attr('action', '/edit_ponto/delete');
    });

    var tbodyPontos = $("#tbodyPontos");

    for (i = 0; i < pontos.length; i++){
        var tr = $('<tr></tr>');
        tr.append('<td class="text-center">'+ pontos[i].id_ponto +'</td>')
        tr.append('<td class="text-center">'+ pontos[i].nome +'</td>')
        var dataPonto = (pontos[i].data_ponto).slice(0, 10)
        var dataFormated = dataPonto.slice(8, 10)+'/'+dataPonto.slice(5, 7)+'/'+dataPonto.slice(0, 4);
        tr.append('<td class="text-center">'+ dataFormated +'</td>')
        tr.append('<td class="text-center">'+ pontos[i].feriado +'</td>')
        tr.append('<td class="text-center">'+ (pontos[i].entPri).slice(0, 5) +'</td>')
        tr.append('<td class="text-center">'+ (pontos[i].saiPri).slice(0, 5) +'</td>')
        tr.append('<td class="text-center">'+ (pontos[i].entSeg).slice(0, 5) +'</td>')
        tr.append('<td class="text-center">'+ (pontos[i].saiSeg).slice(0, 5) +'</td>')
        tbodyPontos.append(tr);
    }

    var id_func = $("#id_func");
    var nome = $("#nome");
    var data_ponto = $("#data_ponto");
    var feriado = $("#feriado");
    var entPri = $("#entPri");
    var saiPri = $("#saiPri");
    var entSeg = $("#entSeg");
    var saiSeg = $("#saiSeg");
    var alerta = $("#alert");
    var nomeAlert = $("#nomeAlert");
    var id_ponto = $("#id_ponto");

    alerta.hide()

    for (i = 0; i < pontos.length; i++){
        var dataPonto = (pontos[i].data_ponto).slice(0, 10);
        pontos[i].data_ponto = dataPonto
    }

    nome.change(function(){
        for (i = 0; i < pontos.length; i++){
            var dataPonto = (pontos[i].data_ponto).slice(0, 10);
            var dataFormated = dataPonto.slice(8, 10)+'/'+dataPonto.slice(5, 7)+'/'+dataPonto.slice(0, 4);
            data_ponto.append('<option value="'+ dataPonto +'">'+ dataFormated +'</option>')
            if (pontos[i].nome == nome.val()){
                alerta.hide();
                /*for (j = 0; j < pontos.length; i++){
                    if (pontos[j].nome == nome.val()){
                        
                        var dataFormated = dataPonto.slice(8, 10)+'/'+dataPonto.slice(5, 7)+'/'+dataPonto.slice(0, 4);
                        data_ponto.append('<option value="'+ pontos[i].data_ponto +'">'+ dataFormated +'</option>')
                    }
                }
                i = pontos.length*/
                break;
            } else if ((pontos[i].nome != nome.val()) && ((i+1) >= pontos.length)) {
                alerta.show()
                nomeAlert.empty();
                nomeAlert.append(nome.val());
                data_ponto.empty();
                data_ponto.append('<option disabled selected>Selecione um funcionário.</option>')
                feriado.val('');
                entPri.val('');
                saiPri.val('');
                entSeg.val('');
                saiSeg.val('');
            }
        }    
    })

    data_ponto.change(function(){
        for (i = 0; i < pontos.length; i++){
            if (pontos[i].data_ponto == data_ponto.val()){
                id_ponto.val(parseInt(pontos[i].id_ponto));
                feriado.val(pontos[i].feriado);
                entPri.val((pontos[i].entPri).slice(0, 5));
                saiPri.val((pontos[i].saiPri).slice(0, 5));
                entSeg.val((pontos[i].entSeg).slice(0, 5));
                saiSeg.val((pontos[i].saiSeg).slice(0, 5));
            } 
        }
    })
})