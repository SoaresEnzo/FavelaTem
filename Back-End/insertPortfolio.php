<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Portfolio.php";

$portfolio = new Portfolio;
$portfolio->email = $_POST['email'];
$portfolio->senha = md5($_POST['senha']);
$portfolio->imagem = $_POST['imagem'];
$portfolio->descricao = $_POST['descricao'];

if (strlen($portfolio->email)>=9 && strlen($portfolio->imagem)>11) {
    $validate = $portfolio->insertPortfolio();
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
