<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/Curso.php";

$cursos=new Cursos;
$cursos->idcursos=$_GET['id'];

print_r(json_encode($cursos->selectCursos()));