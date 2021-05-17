<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/RespostasUsuario.php";

function arrCompleto()
{
    foreach ($_POST['resposta'] as $envio) {
        if (!isset($envio[0]) || !isset($envio[1])) {
            return false;
        }
    }
    return true;
}

if (arrCompleto()) {
    $devolucao = [];
    if (isset($_POST['resposta']) && isset($_POST['email']) && isset($_POST['senha'])) {
        foreach ($_POST['resposta'] as $envio) {
            $respostaUser = $envio[0];
            $perguntaUser = $envio[1];

            $resposta = new RespostasUsuario;
            $resposta->email = $_POST['email'];
            $resposta->resposta_usuario = $respostaUser;
            $resposta->fk_pergunta = $perguntaUser;
            $resposta->senha = md5($_POST['senha']);

            $insert = $resposta->insertRespostas();
            array_push($devolucao, $insert);
        }

        print_r(
            json_encode(
                $devolucao
            )
        );
    } else {
        print_r(
            json_encode(
                array(
                    "status" => 0,
                    "erro" => "Algum parâmetro está faltando"
                )
            )
        );
    }
} else {
    print_r(
        json_encode(
            array(
                "status" => 0,
                "erro" => "É necessário o envio do formulário completo"
            )
        )
    );
}
