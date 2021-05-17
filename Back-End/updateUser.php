<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/UserBasico.php";

$usuario = new UserBasico;
$usuario->email = $_POST['email'];
$usuario->senha = md5($_POST['senha']);
$usuario->nome = $_POST['nome'];
$usuario->sobrenome = $_POST['sobrenome'];

if (strlen($usuario->nome)>1 && strlen($usuario->sobrenome)>1) {
    $validate = $usuario->updateUser();
    if ($validate == true) {
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
                    'mensagem' => 'Os dados não foram atualizados'
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
