<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Servicos.php";

$servicos = new Servicos;

$servicos->id = $_POST['idservico'];
$servicos->descricao_servico = $_POST['descricaoservico'];
$servicos->inicio_atendimento = $_POST['inicioatendimento'];
$servicos->fim_atendimento = $_POST['fimatendimento'];
$servicos->imagem_servico = $_POST['imagemservico'];
$servicos->fk_subcategoria = $_POST['idsubcategoria'];
$servicos->senha = md5($_POST['senha']);
$servicos->email = $_POST['email'];

if (isset($_POST['atendimentodomicilio'])) {
    $servicos->atendimento_domicilio = 1;
} else {
    $servicos->atendimento_domicilio = 0;
}

if (isset($_POST['atendimentolocal'])) {
    $servicos->atendimento_local = 1;
} else {
    $servicos->atendimento_local = 0;
}

if (isset($_POST['pagamentodinheiro'])) {
    $servicos->pagamento_dinheiro = 1;
} else {
    $servicos->pagamento_dinheiro = 0;
}

if (isset($_POST['pagamentocartao'])) {
    $servicos->pagamento_cartao = 1;
} else {
    $servicos->pagamento_cartao = 0;
}


$validate = $servicos->updateServicos();

if ($validate > 0) {
    http_response_code(200);
    print_r(
        json_encode(
            array(
                "mensagem" => "Dados alterados com sucesso"
            )
        )
    );
} else {
    http_response_code(200);
    print_r(
        json_encode(
            array(
                "mensagem" => "Dados não foram alterados"
            )
        )
    );
}
