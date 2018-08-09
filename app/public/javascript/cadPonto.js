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

    // Botoões de Limpar e Salvar
    var salvar = $("#salvar");
    var limpar = $("#limpar");
    
    // Coletando inputs
    var id_func = $("#id_func");
    var nome = $("#nome");
    var data_ponto = $("#data_ponto");
    var feriado = $("#feriado");
    var entPri = $("#entPri");
    var saiPri = $("#saiPri");
    var entSeg = $("#entSeg");
    var saiSeg = $("#saiSeg");

    // For para adicionar os nomes ao select
    for (i = 0; i < funcionarios.length; i++){
        nome.append('<option value="'+ funcionarios[i].nome +'">'+ funcionarios[i].nome +'</option>');
    };

    // Mudando o ID do funcionario
    nome.change(function(){
        for(i = 0; i < funcionarios.length; i++){
            if (nome.val() == funcionarios[i].nome){
                id_func.val(funcionarios[i].id_func);
            };
        };
    });

    // Carregando o alert oculto
    var alerta = $("#alertaCampo");
    alerta.hide();

    // Carregando as mensagens de campo vazio
    var nomeVazio = '<a class="col-12">Campo <strong>Nome</strong> vazio</a>'
    var dataVazio = '<a class="col-12">Campo <strong>Data</strong> vazio</a>'
    var feriadoVazio = '<a class="col-12">Campo <strong>Feriado</strong> vazio</a>'
    var entPriVazio = '<a class="col-12">Campo <strong>1ª Entrada</strong> vazio</a>'
    var saiPriVazio = '<a class="col-12">Campo <strong>1ª Saida</strong> vazio</a>'
    var entSegVazio = '<a class="col-12">Campo <strong>2ª Entrada</strong> vazio</a>'
    var saiSegVazio = '<a class="col-12">Campo <strong>2ª Saida</strong> vazio</a>'

    // Limpando os campos
    limpar.click(function(e){
        e.preventDefault();
        id_func.val('');
        nome.val('vazio');
        data_ponto.val('');
        feriado.val('vazio');
        entPri.val('');
        saiPri.val('');
        entSeg.val('');
        saiSeg.val('');
    })

    // Fechar o alerta quando clicar
    alerta.click(function(){
        alerta.hide();
    })

    // Verificar campos antes de salvar, mostrar mensagem de erro caso esteja vazia
    salvar.click(function(e){
        alerta.empty();
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
    })


});