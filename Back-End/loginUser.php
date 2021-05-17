<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/UserBasico.php";

if (isset($_POST["email"]) && isset($_POST["senha"])) {
    $usuario = new UserBasico;
    $usuario->email = $_POST['email'];
    $usuario->senha = md5($_POST['senha']);

    $validate = $usuario->loginUser();

    if (count($validate) > 0) {
        $validate[0]['senha'] = $_POST['senha'];
        print_r(
            json_encode(
                array(
                    'status' => 1,
                    'logged' => 'Usuário logado',
                    'body' => $validate
                )
            )
        );
    } else {
        print_r(
            json_encode(
                array(
                    'status' => 0,
                    'mensagem' => 'Não foi possível logar'
                )
            )
        );
    }
} else {
    print_r(
        json_encode(
            array(
                'status' => 0,
                'mensagem' => 'Não foi possível logar'
            )
        )
    );
}
