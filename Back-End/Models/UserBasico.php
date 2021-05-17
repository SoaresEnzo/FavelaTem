<?php

require 'Connection.php';
//checked
class UserBasico
{
    public $id;
    public $id_prestador;
    public $email;
    public $senha;
    public $nome;
    public $sobrenome;

    //Cria um novo usuário padrão
    public function registerUser()
    {
        $conn = Connection::getConnection();
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_SILENT);
        $stmt = $conn->query("INSERT INTO cadastrobasico
        (
            nome,
            sobrenome,
            email,
            senha
        ) 
            VALUES 
        (
            '$this->nome',
            '$this->sobrenome',
            '$this->email',
            '$this->senha'
        )
        ");

        return $stmt;
    }

    //Deleta um usuário padrão
    public function deleteUser()
    {
        try {
            //Coloca no objeto os valores do id de usuario e prestador(nulo caso não exista)
            $conn = Connection::getConnection();
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            //Transaction faz várias queries e consegue cancelar tudo, se alguma falhar
            $conn->beginTransaction();
            $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador from cadastrobasico left outer join cadastrolojaprestador on iduser = fk_cadastro WHERE email = '$this->email' and senha = '$this->senha';");
            $retorno = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if ($retorno === []) {
                return false;
            } else {
                $this->id_prestador = $retorno[0]['idcadastrolojaprestador'];
                $this->id = $retorno[0]['iduser'];
            }
            //------------------------------------------------------------------------------

            $conn->query("DELETE FROM portfolio WHERE fk_lojaprestador = '$this->id_prestador'");

            $conn->query("DELETE FROM servicos WHERE fk_lojaprestador = '$this->id_prestador'");

            $conn->query("DELETE FROM respostas_usuarios WHERE fk_usuario = '$this->id_prestador'");

            $conn->query("DELETE FROM respostas_avaliacao WHERE id_prestador = '$this->id_prestador'");

            $conn->query("DELETE FROM comentarios WHERE fk_user = '$this->id'");

            $conn->query("UPDATE cadastrolojaprestador
             SET
             nome_fantasia = 'Deletado',
             telefone= 'Deletado',
             cep = 'Deletado',
             logradouro = 'Deletado',
             numero = 0,
             bairro = 'Deletado',
             estado = 'NO',
             cidade = 'Deletado',
             pontuacao = 0,
             atividades = 0,
             imagem = 'Deletado',
             descricao_loja = 'Deletado',
             delecao_cadastro = NOW()
             WHERE
             idcadastrolojaprestador = '$this->id_prestador' ");

            $conn->query("UPDATE cadastrobasico
            SET
            nome = 'Deletado',
            sobrenome = 'Deletado',
            delecao_cadastro = NOW()
            WHERE
            iduser = '$this->id'");

            $retorno = $conn->commit();
            return $retorno;
        } catch (Exception $e) {
            print_r($e->getMessage());
        }
    }

    //Update de usuários
    public function updateUser()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->id = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->id['0']['iduser']) ? $this->id = $this->id['0']['iduser'] : $this->id = null;

        $stmt = $conn->query("UPDATE cadastrobasico
        SET nome = '$this->nome',
            sobrenome = '$this->sobrenome'
        WHERE iduser = '$this->id';");
        return $stmt;
    }

    //Login de usuários
    public function loginUser()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,nome,email,idcadastrolojaprestador FROM cadastrobasico LEFT OUTER JOIN cadastrolojaprestador ON iduser = fk_cadastro WHERE email = '$this->email' AND senha = '$this->senha' AND cadastrobasico.delecao_cadastro IS NULL;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
