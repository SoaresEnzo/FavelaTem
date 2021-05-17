<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/PrestadorServicos.php";

$prestador = new PrestadorServicos;
$prestador->nome_fantasia = $_POST['nomefantasia'];
$prestador->telefone = $_POST['telefone'];
$prestador->email = $_POST['email'];
$prestador->cep = $_POST['cep'];
$prestador->logradouro = $_POST['rua'];
$prestador->numero = $_POST['numero'];
$prestador->bairro = $_POST['bairro'];
$prestador->estado = $_POST['estado'];
$prestador->cidade = $_POST['cidade'];
$prestador->senha = md5($_POST['senha']);
$prestador->imagem = $_POST['imagem'];
$prestador->descricao = $_POST['descricao'];

$validate = $prestador->updatePrestador();

if ($validate > 0) {
    print_r(
        json_encode(
            array(
                'status' => 1,
                'mensagem' => 'Dados atualizados com sucesso'
            )
        )
    );
} else {
    print_r(
        json_encode(
            array(
                'status' => 0,
                'mensagem' => 'Não foi possível atualizar estes dados'
            )
        )
    );
}
