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
    var pontos = resposta.data

    var tabela = $("#tabela");
    var form = $("#form");

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

    form.hide();

    var abaEditar = $("#editarPontos");
    var abaLista = $("#listaPontos");

    abaEditar.click(function(){
        tabela.show();
        form.hide()
        abaEditar.addClass('active');
        abaLista.removeClass('active');
    })

    abaLista.click(function(){
        tabela.hide();
        form.show()
        abaEditar.removeClass('active');
        abaLista.addClass('active');
    })

    var updatePonto = $("#atualziar");
    var deletePonto = $("#excluir");

    updatePonto.click(function(){
        form.attr('action', '/edit_ponto/update');
    });

    deletePonto.click(function(){
        form.attr('action', '/edit_ponto/delete');
    });

    var tbodyPontos = $("#tbodyPontos");

    for (i = 0; i < pontos.length; i++){
        nome.append('<option value="'+ pontos[i].nome +'">'+ pontos[i].nome +'</option>')
    }

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

    alerta.hide()

    for (i = 0; i < pontos.length; i++){
        var dataPonto = (pontos[i].data_ponto).slice(0, 10);
        pontos[i].data_ponto = dataPonto
    }

    // Adicionando as datas de acordo com o funcionario
    nome.change(function(){
        for (i = 0; i < pontos.length; i++){
            var dataPonto = (pontos[i].data_ponto).slice(0, 10);
            var dataFormated = dataPonto.slice(8, 10)+'/'+dataPonto.slice(5, 7)+'/'+dataPonto.slice(0, 4);
            data_ponto.append('<option value="'+ dataPonto +'">'+ dataFormated +'</option>')
            if (pontos[i].nome == nome.val('vazio')){
                alerta.hide();
                for (j = 0; j < pontos.length; i++){
                    if (pontos[j].nome == nome.val()){
                        var dataFormated = dataPonto.slice(8, 10)+'/'+dataPonto.slice(5, 7)+'/'+dataPonto.slice(0, 4);
                        data_ponto.append('<option value="'+ pontos[i].data_ponto +'">'+ dataFormated +'</option>')
                    }
                }
                break;
            } else if ((pontos[i].nome != nome.val()) && ((i+1) >= pontos.length)) {
                alerta.show()
                nomeAlert.empty();
                nomeAlert.append(nome.val());
                data_ponto.empty();
                data_ponto.append('<option value="vazio" disabled selected>Selecione um funcionário.</option>')
                feriado.val('');
                entPri.val('');
                saiPri.val('');
                entSeg.val('');
                saiSeg.val('');
            }
        }    
    })

    // Mudando as informações do ponto de acordo com a data
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