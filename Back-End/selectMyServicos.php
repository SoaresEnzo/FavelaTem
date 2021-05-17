<?php
header("Access-Control-Allow-Origin:*");
header("Content-type: application/json");

require "./Models/Servicos.php";

if (isset($_POST['email']) && isset($_POST['senha'])) {
    $servicos = new Servicos;
    $servicos->email = $_POST['email'];
    $servicos->senha = md5($_POST['senha']);
    $validate = $servicos->selectMyServicos();

    print_r(
        json_encode($validate)
    );
} else {
    http_response_code(400);
    print_r(
        json_encode(
            array(
                "mensagem" => "Algo deu errado"
            )
        )
    );
}
