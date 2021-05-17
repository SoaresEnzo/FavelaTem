<?php

require 'Connection.php';

class PrestadorServicos
{
    public $email;
    public $senha;
    public $id;
    public $fk_usuario;
    public $nome_fantasia;
    public $telefone;
    public $cep;
    public $logradouro;
    public $numero;
    public $bairro;
    public $estado;
    public $cidade;
    public $pontuacao;
    public $atividades;
    public $imagem;
    public $descricao;

    //checked
    public function registerPrestador()
    {
        try {
            $conn = Connection::getConnection();
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            //Transaction faz várias queries e consegue cancelar tudo, se alguma falhar
            $conn->beginTransaction();
            //Pega o id do usuário do BD de acordo com a senha e email passado, caso não retorne nada, insere null
            $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
            $this->fk_usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);
            isset($this->fk_usuario['0']['iduser']) ? $this->fk_usuario = $this->fk_usuario['0']['iduser'] : $this->fk_usuario = null;
            //----------------------------->

            $stmt = $conn->query("INSERT INTO cadastrolojaprestador
        (
            nome_fantasia,
            fk_cadastro,
            telefone,
            cep,
            logradouro,
            numero,
            bairro,
            estado,
            cidade,
            pontuacao,
            atividades,
            imagem,
            descricao_loja
        ) 
            VALUES 
        (
            '$this->nome_fantasia',
            '$this->fk_usuario',
            '$this->telefone',
            '$this->cep',
            '$this->logradouro',
            '$this->numero',
            '$this->bairro',
            '$this->estado',
            '$this->cidade',
            '$this->pontuacao',
            '$this->atividades',
            '$this->imagem',
            '$this->descricao'
        )
        ");

            //Seta o atributo id com o ID inserido no banco
            $this->id = $conn->lastInsertId();

            //Para cada pergunta, insere uma resposta vazia no banco com a data de ser respondida depois de 3 meses do cadastro
            $stmt = $conn->query("SELECT idavaliacaoMonitoramento FROM avaliacao_monitoramento;");

            foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $retorno) {
                $idPergunta = $retorno['idavaliacaoMonitoramento'];
                $stmt = $conn->query("INSERT INTO respostas_avaliacao(resposta,id_prestador,id_pergunta,proxima_avaliacao) VALUES ('','$this->id','$idPergunta',timestampadd(month,3,now()));");
            }
            $conn->commit();
            return true;
        } catch (Exception $e) {
            $conn->rollBack();
            return false;
        }
    }

    //ckecked
    public function deletePrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_usuario['0']['iduser']) ? $this->fk_usuario = $this->fk_usuario['0']['iduser'] : $this->fk_usuario = null;
        $stmt = $conn->query("DELETE FROM cadastrolojaprestador WHERE fk_cadastro = '$this->fk_usuario';");
        return $stmt->rowCount();
    }

    //Retorna os dados da página da loja
    public function selectPrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idcadastrolojaprestador,nome_fantasia,telefone,cep,logradouro,numero,bairro,estado,cidade,pontuacao,atividades,imagem,descricao_loja,email FROM cadastrolojaprestador INNER JOIN cadastrobasico ON iduser = fk_cadastro WHERE idcadastrolojaprestador = '$this->id';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function selectPrestadorByLogin()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador FROM cadastrobasico INNER JOIN cadastrolojaprestador ON iduser = fk_cadastro WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador']) ? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador'] : $this->fk_lojaprestador = null;

        //dad0s -=agina hub
        $stmt2 = $conn->query("SELECT idcadastrolojaprestador,nome_fantasia,telefone,cep,logradouro,numero,bairro,estado,cidade,pontuacao,atividades,cadastrolojaprestador.imagem,descricao_loja FROM cadastrolojaprestador WHERE idcadastrolojaprestador = '$this->fk_lojaprestador';");
        $dadosPrestador = $stmt2->fetchAll(PDO::FETCH_ASSOC);

        $stmt3 = $conn->query("SELECT sum(valor_pontos) as pontuacao FROM respostas_usuarios inner join respostas_padrao on resposta_usuario = idrespostas_padrao inner join perguntas on respostas_usuarios.fk_pergunta = idperguntas where fk_usuario = '$this->fk_lojaprestador' and veracidade = 1;");
        $pontuacao = $stmt3->fetchAll(PDO::FETCH_ASSOC);

        $stmt4 = $conn->query("SELECT(SELECT count(*) FROM respostas_usuarios where fk_usuario = '$this->fk_lojaprestador') as respostasUser, (SELECT count(*) from perguntas) as perguntasTotal;");
        $perguntas = $stmt4->fetchAll(PDO::FETCH_ASSOC);

        $stmt5 = $conn->query("SELECT count(*) as qntdAnuncios FROM servicos WHERE fk_lojaprestador = '$this->fk_lojaprestador'");
        $anuncios = $stmt5->fetchAll(PDO::FETCH_ASSOC);

        return array(
            'prestador' => $dadosPrestador,
            'pontuacao' => $pontuacao,
            'perguntas' => $perguntas,
            'anuncios' => $anuncios
        );
    }

    public function selectCategoriasPrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT nome_subcategoria FROM subcategorias INNER JOIN servicos on idsubcategorias = fk_subcategoria INNER JOIN cadastrolojaprestador ON fk_lojaprestador = idcadastrolojaprestador WHERE idcadastrolojaprestador = '$this->id' GROUP BY nome_subcategoria;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    //checked
    public function updatePrestador()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser FROM cadastrobasico WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_usuario = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_usuario['0']['iduser']) ? $this->fk_usuario = $this->fk_usuario['0']['iduser'] : $this->fk_usuario = null;

        $stmt = $conn->query("UPDATE cadastrolojaprestador
        SET nome_fantasia = '$this->nome_fantasia',
            telefone = '$this->telefone',
            cep = '$this->cep',
            logradouro = '$this->logradouro',
            numero = '$this->numero',
            bairro = '$this->bairro',
            estado = '$this->estado',
            cidade = '$this->cidade',
            imagem = '$this->imagem',
            descricao_loja = '$this->descricao'
        WHERE fk_cadastro = '$this->fk_usuario';");
        return $stmt->rowCount();
    }

    public function checkPesquisa()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador FROM cadastrobasico INNER JOIN cadastrolojaprestador ON iduser = fk_cadastro WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador']) ? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador'] : $this->fk_lojaprestador = null;

        $stmt = $conn->query("SELECT now() > proxima_avaliacao as deveAtualizar FROM respostas_avaliacao WHERE id_prestador = '$this->fk_lojaprestador';");

        foreach ($stmt->fetchAll(PDO::FETCH_ASSOC) as $retorno) {
            if ($retorno['deveAtualizar'] == 1) {
                return array('pesquisa' => true);
            }
        }
        return array('pesquisa' => false);
    }
}

//Query conceitual para fazer update do tempo de responder a pesquisa
//update cadastrobasico set delecao_cadastro = timestampadd(month,3,delecao_cadastro) where iduser = 3;