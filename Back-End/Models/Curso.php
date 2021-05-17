<?php

require 'Connection.php';
//Checked
class Cursos
{

    public $idcursos;
    public $nome_curso;
    public $pontuacao;
    public $descricao;
    public $imagem;

    public static function selectAllCursos()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT * FROM cursos;");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function selectCursos()
    {
        $conn = Connection::getConnection();
        $stmt = $conn->query("SELECT idperguntas,fk_curso,conteudo,pegunta,valor_pontos FROM cursos left outer join perguntas on idcursos = fk_curso where idcursos = '$this->idcursos';");
        $perguntas = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $stmt = $conn->query("SELECT idrespostas_padrao,fk_pergunta,resposta FROM cursos left outer join perguntas on idcursos = fk_curso inner join respostas_padrao on fk_pergunta = idperguntas where idcursos = '$this->idcursos';");
        $respostas = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return Array('perguntas'=>$perguntas,'respostas'=>$respostas);
    }
}
