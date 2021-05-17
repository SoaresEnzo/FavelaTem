<?php

require 'Connection.php';
//Checked
class Comentarios
{
    public $idcomentario;
    public $comentario;
    public $fk_user;
    public $fk_loja;
    public $criacao_comment;
    public $email;
    public $senha;

    public function insertComment()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_user = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_user['0']['iduser']) ? $this->fk_user = $this->fk_user['0']['iduser'] : $this->fk_user = null;

        $stmt = $conn->query("INSERT INTO comentarios
        (
            comentario,
            fk_user,
            fk_loja
        ) 
            VALUES 
        (
            '$this->comentario',
            '$this->fk_user',
            '$this->fk_loja'
        );
        ");

        return $stmt;
    }


    public function deleteComment()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_user = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_user['0']['iduser']) ? $this->fk_user = $this->fk_user['0']['iduser'] : $this->fk_user = null;

        $stmt = $conn->query("DELETE FROM comentarios WHERE fk_user = '$this->fk_user' AND idcomentario = '$this->idcomentario';");
        return $stmt->rowCount();
    }

    //OBS: o select de comments está no join de prestadores, para retornar todos os dados necessários para a página da loja de uma vez


    public function updateComments()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_user = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_user['0']['iduser']) ? $this->fk_user = $this->fk_user['0']['iduser'] : $this->fk_user = null;


        $stmt = $conn->query(
            "UPDATE comentarios
        SET comentario = '$this->comentario'
        WHERE idcomentario = '$this->idcomentario'
        AND fk_user = '$this->fk_user';"
        );
        return $stmt->rowCount();
    }

    public function selectComments()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcomentario,comentario,fk_user,fk_loja,criacao_comment,nome FROM comentarios INNER JOIN cadastrobasico ON fk_user = iduser WHERE fk_loja = '$this->fk_loja'");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
