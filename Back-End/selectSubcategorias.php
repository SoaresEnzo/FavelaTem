<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Servicos.php";

if (isset($_POST['id'])) {
    $servico = new Servicos;
    $servico->idcateg = $_POST['id'];
    $validate = $servico->selectSubcategorias();
    print_r(json_encode($validate));
} else {
    print_r(json_encode(array("erro"=>$_POST)));
}
