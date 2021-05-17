  
<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Servicos.php";

$servicos = new Servicos;
$servicos->id = $_POST ['id'];
$servicos->senha = md5($_POST ['senha']);
$servicos->email = $_POST ['email'];

$validate = $servicos->deleteServico();

if ($validate == true) {
    print_r(
        json_encode(
            array(
                'status' => 'sucesso',
                'mensagem' => 'Serviço deletado com sucesso'
            )
        )
    );
} else {
    print_r(
        json_encode(
            array(
                'status' => 'falha',
                'mensagem' => 'Houve um erro ao deletar este serviço'
            )
        )
    );
}