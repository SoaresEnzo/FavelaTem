<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Servicos.php";

$servicos = new Servicos;
$servicos->busca = $_GET['busca'];

$validate = $servicos->selectServicosBySearch();

print_r(json_encode($validate));