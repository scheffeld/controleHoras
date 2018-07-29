// Recuperando os botões de relatorio
var enviarPontos = $("#enviarPontos");
var enviarFuncionarios = $("#enviarFuncionarios");
var formRelatorio = $("#formRelatorio");

enviarFuncionarios.click(function(){
    formRelatorio.attr('action', '/relatorios/funcionarios')
})

enviarPontos.click(function(){
    formRelatorio.attr('action', '/relatorios/pontos')
})

