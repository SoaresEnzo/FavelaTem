<?php
//Página para mostrar o perfil de um prestador
header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/PrestadorServicos.php";

$prestador = new PrestadorServicos;
$prestador->id = $_GET['id'];

$validate = $prestador->selectCategoriasPrestador();

print_r(json_encode($validate));