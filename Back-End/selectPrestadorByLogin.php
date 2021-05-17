<?php
//Página para mostrar o perfil de um prestador
header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/PrestadorServicos.php";

if (isset($_POST['email']) && isset($_POST['senha'])) {
    $prestador = new PrestadorServicos;
    $prestador->email = $_POST['email'];
    $prestador->senha = md5($_POST['senha']);
    $validate = $prestador->selectPrestadorByLogin();

    print_r(json_encode($validate));
} else {
    print_r(
        json_encode(
            array(
                "status" => 0,
                "mensagem" => "Algo deu errado"
            )
        )
    );
}
