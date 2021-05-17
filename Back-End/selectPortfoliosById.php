<?php
//Página para mostrar o portfolio de um prestador
header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Portfolio.php";

$portfolio = new Portfolio;
$portfolio->fk_lojaprestador = $_GET['id'];

$validate = $portfolio->selectPortfoliosById();

print_r(json_encode($validate));