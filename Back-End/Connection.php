<?php

class Connection
{
    public static function getConnection()
    {
        $conn = new PDO("mysql:host=localhost;dbname=favelatem;charset=utf8",
        "root",
        "");

        if($conn){
            return $conn;
        } else {
            return "Erro na conexão com o banco de dados.";
        }

    }
}
