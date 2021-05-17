<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Portfolio.php";

$portfolio = new Portfolio;
$portfolio->senha = md5($_POST['senha']);
$portfolio->email = $_POST['email'];

if (strlen($portfolio->email) >= 9) {

    $validate = $portfolio->selectMyPortfolios();
    print_r(
        json_encode(
            array(
                'status' => 1,
                'body' => $validate
            )
        )
    );
    
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
