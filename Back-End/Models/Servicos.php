<?php

require 'Connection.php';

class Servicos
{
    public $id;
    public $fk_lojaprestador;
    public $fk_subcategoria;
    public $descricao_servico;
    public $atendimento_domicilio;
    public $atendimento_local;
    public $pagamento_dinheiro;
    public $pagamento_cartao;
    public $inicio_atendimento;
    public $fim_atendimento;
    public $imagem_servico;
    public $email;
    public $senha;
    public $idcateg;
    public $busca;

    public function registerServicos()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador from cadastrobasico inner join cadastrolojaprestador on iduser = fk_cadastro WHere email = '$this->email' and senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador']) ? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador'] : $this->fk_lojaprestador = null;

        $stmt = $conn->query("INSERT INTO servicos
        (
            fk_lojaprestador,
            fk_subcategoria,
            descricao_servico,
            atendimento_domicilio,
            atendimento_local,
            pagamento_dinheiro,
            pagamento_cartao,
            inicio_atendimento,
            fim_atendimento,
            imagem_servico
           
        ) 
            VALUES 
        (
            '$this->fk_lojaprestador',
            '$this->fk_subcategoria',
            '$this->descricao_servico',
            '$this->atendimento_domicilio',
            '$this->atendimento_local',
            '$this->pagamento_dinheiro',
            '$this->pagamento_cartao',
            '$this->inicio_atendimento',
            '$this->fim_atendimento',
            '$this->imagem_servico'
        )
        ");
        return $stmt;
    }


    public function deleteServico()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador from cadastrobasico inner join cadastrolojaprestador on iduser = fk_cadastro WHere email = '$this->email' and senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador']) ? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador'] : $this->fk_lojaprestador = null;
        $stmt = $conn->query("DELETE FROM servicos WHERE idservicos = '$this->id' AND fk_lojaprestador = '$this->fk_lojaprestador'");
        return $stmt->rowCount();
    }

    public static function selectServicos()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT * FROM servicos INNER JOIN cadastrolojaprestador ON fk_lojaprestador = idcadastrolojaprestador inner join subcategorias on fk_subcategoria = idsubcategorias inner join categorias_servico on fk_categoria = idcategorias_servico;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function selectServicosBySearch()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT * FROM servicos INNER JOIN cadastrolojaprestador ON fk_lojaprestador = idcadastrolojaprestador WHERE descricao_servico LIKE '%$this->busca%' OR nome_fantasia LIKE '%$this->busca%' OR descricao_loja LIKE '%$this->busca%';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    public static function selectCategorias()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT * FROM categorias_servico;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function selectSubcategorias()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT * FROM subcategorias WHERE fk_categoria = '$this->idcateg';");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function updateServicos()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador from cadastrobasico inner join cadastrolojaprestador on iduser = fk_cadastro WHere email = '$this->email' and senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador']) ? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador'] : $this->fk_lojaprestador = null;

        $stmt = $conn->query("UPDATE servicos set
    descricao_servico = '$this->descricao_servico',
    atendimento_domicilio = '$this->atendimento_domicilio',
    atendimento_local = '$this->atendimento_local',
    pagamento_dinheiro = '$this->pagamento_dinheiro',
    pagamento_cartao = '$this->pagamento_cartao',
    inicio_atendimento = '$this->inicio_atendimento',
    fim_atendimento =  '$this->fim_atendimento',
    imagem_servico = '$this->imagem_servico',
    fk_subcategoria = '$this->fk_subcategoria'
    WHERE idservicos = '$this->id'
    AND fk_lojaprestador = '$this->fk_lojaprestador'");
        return $stmt->rowCount();
    }

    public function selectMyServicos(){
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador from cadastrobasico inner join cadastrolojaprestador on iduser = fk_cadastro WHERE email = '$this->email' and senha = '$this->senha';");
        $this->fk_lojaprestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->fk_lojaprestador['0']['idcadastrolojaprestador']) ? $this->fk_lojaprestador = $this->fk_lojaprestador['0']['idcadastrolojaprestador'] : $this->fk_lojaprestador = null;

        $stmt = $conn->query("SELECT * FROM servicos INNER JOIN cadastrolojaprestador ON fk_lojaprestador = idcadastrolojaprestador inner join subcategorias on fk_subcategoria = idsubcategorias inner join categorias_servico on fk_categoria = idcategorias_servico WHERE fk_lojaprestador = '$this->fk_lojaprestador'");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
