<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/UserBasico.php";

$usuario = new UserBasico;
$usuario->email = $_POST['email'];
$usuario->nome = $_POST['nome'];
$usuario->sobrenome = $_POST['sobrenome'];
$usuario->senha = md5($_POST['senha']);


if (strlen($usuario->email) >= 6 && strlen($usuario->nome)>1 && strlen($usuario->sobrenome)>1 && strlen($_POST['senha'])> 5) {
    $validate = $usuario->registerUser();
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
} else {
    print_r(
        json_encode(
            array(
                'status' => 0,
                'mensagem' => 'Algum dado inserido não está correto'
            )
        )
    );
}
