// Requisição de dados do BD através do Axios
// Criando função que acessa a API
function dbPontos(){
    return axios.get("http://localhost:3000/select_pontos")
}

// Criando variavel que vai ser trabalhada com o .then
var dadosPontos = ""

// Atribuindo a Função da API pra um variavel
dadosPontos = dbPontos();

// Requisitando dados para a API e trabalhando com eles na pagina de gerenciamento de pontos
dadosPontos.then(function(resposta){
    // Armazenando os dados do banco no Objeto
    var pontos = resposta.data
    
    // Corpo e div da tabela dos pontos
    var tbodyPontos = $("#tbodyPontos");
    var tabela = $("#tabela");

    // Formulario para exclusão e edição de pontos e alerta para campo vazio
    var form = $("#form");
    var alerta = $("#alertaCampo");

    // Abas de edição e lista
    var abaEditar = $("#editarPontos");
    var abaLista = $("#listaPontos");

    // Campos do formulário
    var id_func = $("#id_func");
    var nome = $("#nome");
    var data_ponto = $("#data_ponto");
    var feriado = $("#feriado");
    var entPri = $("#entPri");
    var saiPri = $("#saiPri");
    var entSeg = $("#entSeg");
    var saiSeg = $("#saiSeg");
    var id_ponto = $("#id_ponto");

    // Botões de atualização e exclusão de dados
    var updatePonto = $("#atualizar");
    var deletePonto = $("#excluir");

    
    // Carregando as mensagens de campo vazio
    var nomeVazio = '<a class="col-12">Campo <strong>Nome</strong> vazio</a>'
    var dataVazio = '<a class="col-12">Campo <strong>Data</strong> vazio</a>'
    var feriadoVazio = '<a class="col-12">Campo <strong>Feriado</strong> vazio</a>'
    var entPriVazio = '<a class="col-12">Campo <strong>1ª Entrada</strong> vazio</a>'
    var saiPriVazio = '<a class="col-12">Campo <strong>1ª Saida</strong> vazio</a>'
    var entSegVazio = '<a class="col-12">Campo <strong>2ª Entrada</strong> vazio</a>'
    var saiSegVazio = '<a class="col-12">Campo <strong>2ª Saida</strong> vazio</a>'
    
    // Escondendo alerta 
    alerta.hide();
    
    // Escondendo formulário
    form.hide();

    //  Ação para click da aba de edição/exclusão
    abaEditar.click(function(){
        tabela.show();
        form.hide()
        abaEditar.addClass('active');
        abaLista.removeClass('active');
    })

    // Ação para click da aba de lista
    abaLista.click(function(){
        tabela.hide();
        form.show()
        abaEditar.removeClass('active');
        abaLista.addClass('active');
    })

    // Adicionando os nomes dos funcionarios
    for (i = 0; i < pontos.length; i++){
        nome.append('<option value="'+ pontos[i].nome +'">'+ pontos[i].nome +'</option>')
    }

    // Adicionando os dados na tabela
    for (i = 0; i < pontos.length; i++){
        var tr = $('<tr></tr>');
        tr.append('<td class="text-center">'+ pontos[i].id_ponto +'</td>')
        tr.append('<td class="text-center">'+ pontos[i].nome +'</td>')
        var dataPonto = (pontos[i].data_ponto).slice(0, 10);
        pontos[i].data_ponto = dataPonto
        var dataFormated = pontos[i].data_ponto.slice(8, 10)+'/'+pontos[i].data_ponto.slice(5, 7)+'/'+pontos[i].data_ponto.slice(0, 4);
        tr.append('<td class="text-center">'+ dataFormated +'</td>')
        tr.append('<td class="text-center">'+ pontos[i].feriado +'</td>')
        tr.append('<td class="text-center">'+ (pontos[i].entPri).slice(0, 5) +'</td>')
        tr.append('<td class="text-center">'+ (pontos[i].saiPri).slice(0, 5) +'</td>')
        tr.append('<td class="text-center">'+ (pontos[i].entSeg).slice(0, 5) +'</td>')
        tr.append('<td class="text-center">'+ (pontos[i].saiSeg).slice(0, 5) +'</td>')
        tbodyPontos.append(tr);
    }

    // Adicionando as datas de acordo com o funcionario
    nome.change(function(){
        data_ponto.empty();
        data_ponto.append('<option disabled selected>Selecione uma data.</option>')
        for (i = 0; i < pontos.length; i++){
            if (nome.val() == pontos[i].nome){
                var dataFormated = pontos[i].data_ponto.slice(8, 10)+'/'+pontos[i].data_ponto.slice(5, 7)+'/'+pontos[i].data_ponto.slice(0, 4);
                data_ponto.append('<option value="'+ pontos[i].data_ponto +'">'+ dataFormated +'</option>')
            }
        }
    })

    // Mostrando os dados de saida e entrada de acordo com a data
    data_ponto.change(function(){
        for (i = 0; i < pontos.length; i++){
            if (pontos[i].data_ponto == data_ponto.val()){
                id_ponto.val(pontos[i].id_ponto);
                feriado.val(pontos[i].feriado);
                entPri.val((pontos[i].entPri).slice(0, 5));
                saiPri.val((pontos[i].saiPri).slice(0, 5));
                entSeg.val((pontos[i].entSeg).slice(0, 5));
                saiSeg.val((pontos[i].saiSeg).slice(0, 5));
            } 
        }
    })

    // Ação para click no alerta
    alerta.click(function(){
        alerta.hide();
    })
    
    // Ação para click no botão de atualização de dados
    updatePonto.click(function(e){
        alerta.empty()
        if (nome.val() == 'vazio' || nome.val() == null){
            e.preventDefault();
            alerta.append(nomeVazio)
            alerta.show();
        };
        if (data_ponto.val() == '' || data_ponto.val() == null){
            e.preventDefault();
            alerta.append(dataVazio)
            alerta.show();
        };
        if (feriado.val() == 'vazio' || feriado.val() == null){
            e.preventDefault();
            alerta.append(feriadoVazio)
            alerta.show();
        };
        if (entPri.val() == '' || entPri.val() == null){
            e.preventDefault();
            alerta.append(entPriVazio)
            alerta.show();
        };
        if (saiPri.val() == '' || saiPri.val() == null){
            e.preventDefault();
            alerta.append(saiPriVazio)
            alerta.show();
        };
        if (entSeg.val() == '' || entSeg.val() == null){
            e.preventDefault();
            alerta.append(entSegVazio)
            alerta.show();
        };
        if (saiSeg.val() == '' || saiSeg.val() == null){
            e.preventDefault();
            alerta.append(saiSegVazio)
            alerta.show();
        };
        form.attr('action', '/edit_ponto/update');
    });

    // Ação para botão de exclusão de dados
    deletePonto.click(function(e){
        alerta.empty()
        if (nome.val() == 'vazio' || nome.val() == null){
            e.preventDefault();
            alerta.append(nomeVazio)
            alerta.show();
        };
        if (data_ponto.val() == '' || data_ponto.val() == null){
            e.preventDefault();
            alerta.append(dataVazio)
            alerta.show();
        };
        if (feriado.val() == 'vazio' || feriado.val() == null){
            e.preventDefault();
            alerta.append(feriadoVazio)
            alerta.show();
        };
        if (entPri.val() == '' || entPri.val() == null){
            e.preventDefault();
            alerta.append(entPriVazio)
            alerta.show();
        };
        if (saiPri.val() == '' || saiPri.val() == null){
            e.preventDefault();
            alerta.append(saiPriVazio)
            alerta.show();
        };
        if (entSeg.val() == '' || entSeg.val() == null){
            e.preventDefault();
            alerta.append(entSegVazio)
            alerta.show();
        };
        if (saiSeg.val() == '' || saiSeg.val() == null){
            e.preventDefault();
            alerta.append(saiSegVazio)
            alerta.show();
        };
        form.attr('action', '/edit_ponto/delete');
    });

})