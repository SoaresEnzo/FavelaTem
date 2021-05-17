<?php

 header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
 header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Servicos.php";

$atendDom;
isset($_POST['atendimentodomicilio'])?$atendDom = 1:$atendDom = 0;
$atendLocal;
isset($_POST['atendimentolocal'])?$atendLocal = 1:$atendLocal = 0;
$pagDinheiro;
isset($_POST['pagamentodinheiro'])?$pagDinheiro = 1:$pagDinheiro = 0;
$pagCartao;
isset($_POST['pagamentocartao'])?$pagCartao = 1:$pagCartao = 0;

$servico = new Servicos;

$servico->atendimento_domicilio = $atendDom;
$servico->atendimento_local = $atendLocal;
$servico->pagamento_dinheiro = $pagDinheiro;
$servico->pagamento_cartao = $pagCartao;
$servico->inicio_atendimento = $_POST['inicioatendimento'].":00";
$servico->fim_atendimento = $_POST['fimatendimento'].":00";
$servico->fk_subcategoria= $_POST['idsubcategoria'];
$servico->descricao_servico = $_POST['descricaoservico'];
$servico->imagem_servico= $_POST['imagemservico'];
$servico->senha= md5($_POST['senha']);
$servico->email= $_POST['email'];


$validate = $servico->registerServicos();


if ($validate == true) {
    print_r(
        json_encode(
            array(
                'status' => 1,
                'mensagem' => 'Dados inseridos com sucesso'
            )
        )
    );
} else {
    print_r(
        json_encode(
            array(
                'status' => 0,
                'mensagem' => 'Falha na inserção de dados'
            )
        )
    );
}
