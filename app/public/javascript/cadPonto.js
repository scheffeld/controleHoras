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

    // Coletando alerta
    var alerta = $("#alertaCampo");

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

    // Definindo alerta oculto
    alerta.hide();

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
        alerta.empty()
        verificarCampo(nome, 'Nome', e);
        verificarCampo(data_ponto, 'Data', e);
        verificarCampo(feriado, 'Feriado', e);
        verificarCampo(entPri, '1ª Entrada', e);
        verificarCampo(saiPri, '1ª Saída', e);
        verificarCampo(entSeg, '2ª Entrada', e);
        verificarCampo(saiSeg, '2ª Saída', e);
    })


});