<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Comentarios.php";

$comentario = new Comentarios;
$comentario->email = $_POST['email'];
$comentario->senha = md5($_POST['senha']);
$comentario->idcomentario = $_POST['idcomentario'];

if (strlen($comentario->email) >= 9 && strlen($_POST['senha'])> 4 && isset($comentario->idcomentario)) {
    $validate = $comentario->deleteComment();
    if ($validate == true) {
        print_r(
            json_encode(
                array(
                    'status' => 1,
                    'mensagem' => 'Comentário deletado com sucesso'
                )
            )
        );
    } else {
        print_r(
            json_encode(
                array(
                    'status' => 0,
                    'mensagem' => 'Falha ao deletar comentário'
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
