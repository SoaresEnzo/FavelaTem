<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Portfolio.php";

$portfolio = new Portfolio;
$portfolio->email = $_POST['email'];
$portfolio->senha = md5($_POST['senha']);
$portfolio->idportfolio = $_POST['id'];

if (strlen($portfolio->email)>=9 && strlen($portfolio->idportfolio)>0) {
    $validate = $portfolio->deletePortfolio();
    if ($validate == true) {
        print_r(
            json_encode(
                array(
                    'status' => 1,
                    'mensagem' => 'Dados apagados com sucesso'
                )
            )
        );
    } else {
        print_r(
            json_encode(
                array(
                    'status' => 0,
                    'mensagem' => 'Falha ao apagar dados'
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
