<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Comentarios.php";

$comment =new Comentarios;
$comment->fk_loja=$_GET['id'];

print_r(json_encode($comment->selectComments()));