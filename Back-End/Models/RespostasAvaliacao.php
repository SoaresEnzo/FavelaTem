<?php
require('Connection.php');

class RespostasAvaliacao
{
    public $idrespostas_avaliacao;
    public $resposta;
    public $id_prestador;
    public $id_pergunta;
    public $proxima_avaliacao;
    public $email;
    public $senha;

    public function responderAvaliacao()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT iduser,idcadastrolojaprestador FROM cadastrobasico INNER JOIN cadastrolojaprestador ON iduser = fk_cadastro WHERE email = '$this->email' AND senha = '$this->senha';");
        $this->id_prestador = $stmt->fetchAll(PDO::FETCH_ASSOC);
        isset($this->id_prestador['0']['idcadastrolojaprestador']) ? $this->id_prestador = $this->id_prestador['0']['idcadastrolojaprestador'] : $this->id_prestador = null;
        
        $stmt = $conn->query("UPDATE respostas_avaliacao 
        SET resposta = '$this->resposta',
            proxima_avaliacao = TIMESTAMPADD(MONTH,3,NOW())
        WHERE id_prestador = $this->id_prestador
        AND id_pergunta = $this->id_pergunta");
        return $stmt->rowCount();
    }

}
