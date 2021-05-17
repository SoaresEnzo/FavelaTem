<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Admin.php";

if (isset($_POST["email"]) && isset($_POST["senha"])) {
    $admin = new Admin;
    $admin->email = $_POST['email'];
    $admin->senha = md5($_POST['senha']);

    $validate = $admin->loginAdmin();

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
