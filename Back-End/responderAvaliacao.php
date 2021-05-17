<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/RespostasAvaliacao.php";

$respostas = $_POST['resposta'];
$email = $_POST['email'];
$senha = md5($_POST['senha']);

$devolucao = [];
if (isset($_POST)) {
    for ($i = 0; $i < count($_POST['resposta']); $i++) {
        $resposta = new RespostasAvaliacao;
        switch ($respostas[$i][1]) {
            case 1:
                if ($respostas[$i][0] == 0 || $respostas[$i][0] == 1) {
                    $perguntaBanco = $respostas[$i][1];
                    $respostaBanco = intval($respostas[$i][0]);
                    $resposta->email = $email;
                    $resposta->senha = $senha;
                    $resposta->resposta = $respostaBanco;
                    $resposta->id_pergunta = $perguntaBanco;
                    
                    $answer = $resposta->responderAvaliacao();
                    array_push($devolucao, $answer);
                }
                break;
            case 2:
                if ($respostas[$i][0] == 0 || $respostas[$i][0] == 1) {
                    $perguntaBanco = $respostas[$i][1];
                    $respostaBanco = intval($respostas[$i][0]);
                    $resposta->email = $email;
                    $resposta->senha = $senha;
                    $resposta->resposta = $respostaBanco;
                    $resposta->id_pergunta = $perguntaBanco;
                    
                    $answer = $resposta->responderAvaliacao();
                    array_push($devolucao, $answer);
                }
                break;
            case 3:
                if ($respostas[$i][0] == 0 || $respostas[$i][0] == 1) {
                    $perguntaBanco = $respostas[$i][1];
                    $respostaBanco = intval($respostas[$i][0]);
                    $resposta->email = $email;
                    $resposta->senha = $senha;
                    $resposta->resposta = $respostaBanco;
                    $resposta->id_pergunta = $perguntaBanco;
                    
                    $answer = $resposta->responderAvaliacao();
                    array_push($devolucao, $answer);
                }
                break;
            case 4:
                if ($respostas[$i][0] === "10-" || $respostas[$i][0] === "10+" || $respostas[$i][0] === "30+" || $respostas[$i][0] === "50+") {
                    $perguntaBanco = $respostas[$i][1];
                    $respostaBanco = $respostas[$i][0];
                    $resposta->email = $email;
                    $resposta->senha = $senha;
                    $resposta->resposta = $respostaBanco;
                    $resposta->id_pergunta = $perguntaBanco;
                    
                    $answer = $resposta->responderAvaliacao();
                    array_push($devolucao, $answer);
                }
                break;
            case 5:
                if ($respostas[$i][0] == 0 || $respostas[$i][0] == 1) {
                    $perguntaBanco = $respostas[$i][1];
                    $respostaBanco = intval($respostas[$i][0]);
                    $resposta->email = $email;
                    $resposta->senha = $senha;
                    $resposta->resposta = $respostaBanco;
                    $resposta->id_pergunta = $perguntaBanco;
                    
                    $answer = $resposta->responderAvaliacao();
                    array_push($devolucao, $answer);
                }
                break;
            case 6:
                if (is_string($respostas[$i][0])) {
                    $perguntaBanco = $respostas[$i][1];
                    $respostaBanco = $respostas[$i][0];
                    $resposta->email = $email;
                    $resposta->senha = $senha;
                    $resposta->resposta = $respostaBanco;
                    $resposta->id_pergunta = $perguntaBanco;
                    
                    $answer = $resposta->responderAvaliacao();
                    array_push($devolucao, $answer);
                }
                break;
        }
        // print_r(
        //     json_encode(
        //         array(
        //             'pergunta' => $respostas[$i][1],
        //             'resposta' => $respostas[$i][0],
        //             'email' => $email,
        //             'senha' => $senha
        //         )
        //     )
        // );
    }
    print_r(json_encode($devolucao));
}
