<?php

require 'Connection.php';

class Contato
{
    public $id;
    public $email_contato;
    public $nome;
    public $msg;
    public $data;
   

    public function registerContato()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("INSERT INTO contato
        (
            email_contato,
            nome,
            msg
            
        ) 
            VALUES 
        (
            '$this->email_contato',
            '$this->nome',
            '$this->msg'
        )
        ");

        return $stmt;
    }

}
  

