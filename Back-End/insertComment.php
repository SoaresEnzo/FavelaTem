<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Comentarios.php";

$comentario = new Comentarios;
$comentario->email = $_POST['email'];
$comentario->comentario = $_POST['comentario'];
$comentario->fk_loja = $_POST['idloja'];
$comentario->senha = md5($_POST['senha']);


$validate = $comentario->insertComment();

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
                'mensagem' => 'Falha na inserção de dados',
                'body'=> $validate
            )
        )
    );
}
