-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 16-Fev-2021 às 23:41
-- Versão do servidor: 5.7.31
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `favelatem`
--
CREATE DATABASE IF NOT EXISTS `favelatem` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `favelatem`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avaliacao_monitoramento`
--

DROP TABLE IF EXISTS `avaliacao_monitoramento`;
CREATE TABLE IF NOT EXISTS `avaliacao_monitoramento` (
  `idavaliacaoMonitoramento` int(11) NOT NULL AUTO_INCREMENT,
  `pergunta` varchar(255) NOT NULL,
  PRIMARY KEY (`idavaliacaoMonitoramento`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `avaliacao_monitoramento`
--

INSERT INTO `avaliacao_monitoramento` (`idavaliacaoMonitoramento`, `pergunta`) VALUES
(1, 'O FavelaTem ajudou a melhorar seu negócio?'),
(2, 'Após a divulgação no FavelaTem sua clientela aumentou?'),
(3, 'Após a divulgação do seu serviço no FavelaTem seu rendimento mensal aumentou?'),
(4, 'Se aumentou, quanto foi aproximadamente?'),
(5, 'Você indicaria o FavelaTem?'),
(6, 'Comentários');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastroadmin`
--

DROP TABLE IF EXISTS `cadastroadmin`;
CREATE TABLE IF NOT EXISTS `cadastroadmin` (
  `idcadastroadmin` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `senha` char(32) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idcadastroadmin`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastroadmin`
--

INSERT INTO `cadastroadmin` (`idcadastroadmin`, `email`, `senha`, `nome`, `imagem`) VALUES
(1, 'enzo@teste.com', 'e10adc3949ba59abbe56e057f20f883e', 'Enzo', 'https://raymanpc.com/wiki/script-en/images/1/15/Admin.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastrobasico`
--

DROP TABLE IF EXISTS `cadastrobasico`;
CREATE TABLE IF NOT EXISTS `cadastrobasico` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` char(32) NOT NULL,
  `criacao_cadastro` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `delecao_cadastro` datetime DEFAULT NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastrobasico`
--

INSERT INTO `cadastrobasico` (`iduser`, `nome`, `sobrenome`, `email`, `senha`, `criacao_cadastro`, `delecao_cadastro`) VALUES
(1, 'Enzo', 'Soares', 'enzo@teste.com', 'e10adc3949ba59abbe56e057f20f883e', '2021-02-11 00:50:41', NULL),
(2, 'Zeca', 'Zee', 'ze@teste.com', 'e10adc3949ba59abbe56e057f20f883e', '2021-02-11 00:51:34', NULL),
(3, 'apagado', 'apagado', 'apagado', 'apagado', '2021-02-13 22:22:34', '2023-08-13 22:30:32'),
(4, 'João', 'Silva', 'john@john.com', 'e10adc3949ba59abbe56e057f20f883e', '2021-02-14 02:28:23', NULL),
(5, 'Enzo', 'Tester', 'enzo@superchoque.com', 'e10adc3949ba59abbe56e057f20f883e', '2021-02-15 03:42:15', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cadastrolojaprestador`
--

DROP TABLE IF EXISTS `cadastrolojaprestador`;
CREATE TABLE IF NOT EXISTS `cadastrolojaprestador` (
  `idcadastrolojaprestador` int(11) NOT NULL AUTO_INCREMENT,
  `fk_cadastro` int(11) NOT NULL,
  `nome_fantasia` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `cep` varchar(10) NOT NULL,
  `logradouro` varchar(150) NOT NULL,
  `numero` varchar(5) NOT NULL,
  `bairro` varchar(50) NOT NULL,
  `estado` char(2) NOT NULL,
  `cidade` varchar(50) NOT NULL,
  `pontuacao` int(11) NOT NULL,
  `atividades` int(3) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  `descricao_loja` text,
  `criacao_cadastro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `delecao_cadastro` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`idcadastrolojaprestador`),
  UNIQUE KEY `fk_cadastro_UNIQUE` (`fk_cadastro`),
  KEY `fk_cadastro_prestador_idx` (`fk_cadastro`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cadastrolojaprestador`
--

INSERT INTO `cadastrolojaprestador` (`idcadastrolojaprestador`, `fk_cadastro`, `nome_fantasia`, `telefone`, `cep`, `logradouro`, `numero`, `bairro`, `estado`, `cidade`, `pontuacao`, `atividades`, `imagem`, `descricao_loja`, `criacao_cadastro`, `delecao_cadastro`) VALUES
(1, 2, 'Zeca do Z', '1199999999', '05214201', 'Rua X', '215', 'Paraisópolis', 'SP', 'SP', 0, 0, '', 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz', '2021-01-01 03:50:41', NULL),
(2, 4, 'João do Pão', '11970707070', '06072200', 'Rua Alfa', '224', 'Paraisópolis', 'SP', 'SP', 0, 0, '', 'Faço pão', '2021-01-01 03:50:41', NULL),
(16, 5, 'Super Choque, o Eletricista', '23151651651', '00000000', 'Rua do teste', '254', 'Teste', 'SP', 'SAMPA', 0, 0, '', 'Fazemos instalações elétricas residenciais, prediais e industriais, sempre buscando atender a NBR 5410 e usando os materiais de melhor qualidade.', '2021-02-15 07:54:17', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias_servico`
--

DROP TABLE IF EXISTS `categorias_servico`;
CREATE TABLE IF NOT EXISTS `categorias_servico` (
  `idcategorias_servico` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(100) NOT NULL,
  PRIMARY KEY (`idcategorias_servico`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `categorias_servico`
--

INSERT INTO `categorias_servico` (`idcategorias_servico`, `categoria`) VALUES
(4, 'Arte, Papelaria e Armarinho'),
(5, 'Assistência Técnica'),
(6, 'Beleza'),
(7, 'Serviços gerais'),
(8, 'Alimentação'),
(9, 'Moda'),
(10, 'Saúde e Bem-estar'),
(11, 'Outros');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
CREATE TABLE IF NOT EXISTS `comentarios` (
  `idcomentario` int(11) NOT NULL AUTO_INCREMENT,
  `comentario` varchar(255) NOT NULL,
  `fk_user` int(11) NOT NULL,
  `fk_loja` int(11) NOT NULL,
  `criacao_comment` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idcomentario`),
  KEY `fk_comment_loja_idx` (`fk_loja`),
  KEY `fk_comment_user_idx` (`fk_user`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `comentarios`
--

INSERT INTO `comentarios` (`idcomentario`, `comentario`, `fk_user`, `fk_loja`, `criacao_comment`) VALUES
(1, 'TESTEAND', 1, 1, '2021-02-11 00:53:35'),
(2, 'TesterZtoZ', 2, 1, '2021-02-11 00:53:35');

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato`
--

DROP TABLE IF EXISTS `contato`;
CREATE TABLE IF NOT EXISTS `contato` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `email_contato` varchar(29) CHARACTER SET utf8mb4 DEFAULT NULL,
  `nome` varchar(100) CHARACTER SET utf8mb4 DEFAULT NULL,
  `msg` varchar(300) CHARACTER SET utf8mb4 DEFAULT NULL,
  `data` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_comentario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cursos`
--

DROP TABLE IF EXISTS `cursos`;
CREATE TABLE IF NOT EXISTS `cursos` (
  `idcursos` int(11) NOT NULL AUTO_INCREMENT,
  `nome_curso` varchar(100) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `imagem_curso` varchar(255) NOT NULL,
  PRIMARY KEY (`idcursos`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `cursos`
--

INSERT INTO `cursos` (`idcursos`, `nome_curso`, `descricao`, `imagem_curso`) VALUES
(3, 'Empreendedorismo', 'Otimas dicas e sugestões para seu negócio evoluir!', 'http://localhost:3000/static/media/empreendedorismo.71592253.png'),
(4, 'Marketing Digital', 'Descubra como seu negócio pode evoluir com nosso curso de marketing', 'http://localhost:3000/static/media/marketing-digital.66091998.png'),
(5, 'Administração', 'Um curso completo com dicas para melhor administrar seu negócio.', 'http://localhost:3000/static/media/consultoria.530e200b.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `perguntas`
--

DROP TABLE IF EXISTS `perguntas`;
CREATE TABLE IF NOT EXISTS `perguntas` (
  `idperguntas` int(11) NOT NULL AUTO_INCREMENT,
  `fk_curso` int(11) NOT NULL,
  `conteudo` text,
  `pegunta` varchar(255) NOT NULL,
  `valor_pontos` int(11) NOT NULL,
  PRIMARY KEY (`idperguntas`),
  KEY `fk_pergunta_curso_idx` (`fk_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `perguntas`
--

INSERT INTO `perguntas` (`idperguntas`, `fk_curso`, `conteudo`, `pegunta`, `valor_pontos`) VALUES
(13, 3, 'https://www.youtube.com/embed/qXRYQl60lgw', '1 - Empreendedorismo é o esforço de  criar, idealizar,', 50),
(14, 3, '', '2 - Para empreender é preciso ficar atento aos seguintes pontos:', 50),
(15, 3, '', '3 - Algumas características ajudam a pessoa empreendedora. São elas:', 50),
(16, 4, 'https://www.youtube.com/embed/rTxPwy4mKKw', '1 - Os quatro P do Marketing são: ', 60),
(17, 4, '', '2 - Preço é:', 60),
(18, 4, '', '3 - O quarto P do marketing significa promoção ou seja:', 60),
(19, 5, 'https://www.youtube.com/embed/8Jx033mbv6M', '1 - Margem de lucro é basicamente o que você recebe pela venda do produto retirando mão de obra, produção, embalagem e tudo o que você precisou investir para produzir o produto para o seu cliente?', 70),
(20, 5, '', '2 - Conta de água, luz e telefone, são custos fixos ou variáveis?', 70),
(21, 5, '', '3 - Não é importante analisar o mercado e seus concorrentes na hora de precificar. Essa afirmação é Falsa ou verdadeira?', 70);

-- --------------------------------------------------------

--
-- Estrutura da tabela `portfolio`
--

DROP TABLE IF EXISTS `portfolio`;
CREATE TABLE IF NOT EXISTS `portfolio` (
  `idportfolio` int(11) NOT NULL AUTO_INCREMENT,
  `imagem` varchar(255) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `fk_lojaprestador` int(11) NOT NULL,
  PRIMARY KEY (`idportfolio`),
  KEY `fk_portfolio_prestador_idx` (`fk_lojaprestador`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_avaliacao`
--

DROP TABLE IF EXISTS `respostas_avaliacao`;
CREATE TABLE IF NOT EXISTS `respostas_avaliacao` (
  `idrespostas_avaliacao` int(11) NOT NULL AUTO_INCREMENT,
  `resposta` varchar(255) NOT NULL,
  `id_prestador` int(11) NOT NULL,
  `id_pergunta` int(11) NOT NULL,
  `proxima_avaliacao` timestamp NOT NULL,
  PRIMARY KEY (`idrespostas_avaliacao`),
  KEY `fk_resposta_pergunta_avaliacao_idx` (`id_pergunta`),
  KEY `fk_resposta_prestador_avaliacao_idx` (`id_prestador`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `respostas_avaliacao`
--

INSERT INTO `respostas_avaliacao` (`idrespostas_avaliacao`, `resposta`, `id_prestador`, `id_pergunta`, `proxima_avaliacao`) VALUES
(8, '', 16, 1, '2021-05-15 07:54:17'),
(9, '', 16, 2, '2021-05-15 07:54:17'),
(10, '', 16, 3, '2021-05-15 07:54:17'),
(11, '', 16, 4, '2021-01-15 07:54:17'),
(12, '', 16, 5, '2021-05-15 07:54:17'),
(13, '', 16, 6, '2021-05-15 07:54:17');

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_padrao`
--

DROP TABLE IF EXISTS `respostas_padrao`;
CREATE TABLE IF NOT EXISTS `respostas_padrao` (
  `idrespostas_padrao` int(11) NOT NULL AUTO_INCREMENT,
  `fk_pergunta` int(11) NOT NULL,
  `veracidade` tinyint(1) NOT NULL,
  `resposta` varchar(500) NOT NULL,
  PRIMARY KEY (`idrespostas_padrao`),
  KEY `fk_pergunta_respostapadrao_idx` (`fk_pergunta`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `respostas_padrao`
--

INSERT INTO `respostas_padrao` (`idrespostas_padrao`, `fk_pergunta`, `veracidade`, `resposta`) VALUES
(1, 2, 1, '1'),
(2, 2, 0, '0'),
(3, 2, 0, '0'),
(4, 2, 0, '0'),
(5, 3, 1, 'a'),
(6, 3, 0, 'v'),
(7, 3, 0, 'c'),
(8, 3, 0, 's'),
(9, 4, 1, 'r'),
(10, 4, 0, 'w'),
(11, 4, 0, 't'),
(12, 4, 0, 'g'),
(13, 5, 1, 'b'),
(14, 5, 0, 'h'),
(15, 5, 0, 'j'),
(16, 5, 0, 'k'),
(23, 13, 1, 'Verdadeiro'),
(24, 13, 0, 'Falso'),
(25, 14, 1, 'Responsabilidade, compensação, Risco de falha.'),
(26, 14, 0, 'Acordar cedo, trabalhar aos finais de semana e gastar pouco.'),
(27, 15, 1, 'Acordar cedo, trabalhar aos finais de semana e gastar pouco.'),
(28, 15, 0, 'Cautela,  atenção e intuição.'),
(29, 16, 1, 'Produto, Preço, Praça e Promoção'),
(30, 16, 0, 'Pensar, Planejar, Pesquisar e Produzir'),
(31, 17, 1, 'Quanto o produto vai custar para o cliente'),
(32, 17, 0, 'Quanto você gastou para produzir o produto'),
(33, 18, 0, 'Descontos que você dá para o seu cliente.'),
(34, 18, 1, 'Como você promove ou divulga sua marca.'),
(35, 19, 1, 'Verdadeiro'),
(36, 19, 0, 'Falso'),
(37, 20, 1, 'Fixos'),
(38, 20, 0, 'Variáveis'),
(39, 21, 0, 'Verdadeira'),
(40, 21, 1, 'Falsa');

-- --------------------------------------------------------

--
-- Estrutura da tabela `respostas_usuarios`
--

DROP TABLE IF EXISTS `respostas_usuarios`;
CREATE TABLE IF NOT EXISTS `respostas_usuarios` (
  `idrespostas` int(11) NOT NULL AUTO_INCREMENT,
  `fk_usuario` int(11) NOT NULL,
  `resposta_usuario` int(11) NOT NULL,
  `fk_pergunta` int(11) NOT NULL,
  PRIMARY KEY (`fk_usuario`,`fk_pergunta`),
  UNIQUE KEY `idrespostas_UNIQUE` (`idrespostas`),
  KEY `fk_prestador_resposta_idx` (`fk_usuario`),
  KEY `fk_resposta_usuario_idx` (`resposta_usuario`),
  KEY `fk_pergunta_resposta_idx` (`fk_pergunta`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `servicos`
--

DROP TABLE IF EXISTS `servicos`;
CREATE TABLE IF NOT EXISTS `servicos` (
  `idservicos` int(11) NOT NULL AUTO_INCREMENT,
  `fk_lojaprestador` int(11) NOT NULL,
  `fk_subcategoria` int(11) NOT NULL,
  `descricao_servico` varchar(255) NOT NULL,
  `atendimento_domicilio` tinyint(1) NOT NULL,
  `atendimento_local` tinyint(1) NOT NULL,
  `pagamento_dinheiro` tinyint(1) NOT NULL,
  `pagamento_cartao` tinyint(1) NOT NULL,
  `inicio_atendimento` time NOT NULL,
  `fim_atendimento` time NOT NULL,
  `imagem_servico` varchar(255) NOT NULL,
  PRIMARY KEY (`idservicos`),
  KEY `fk_servico_prestador_idx` (`fk_lojaprestador`),
  KEY `fk_servico_subcategoria_idx` (`fk_subcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `servicos`
--

INSERT INTO `servicos` (`idservicos`, `fk_lojaprestador`, `fk_subcategoria`, `descricao_servico`, `atendimento_domicilio`, `atendimento_local`, `pagamento_dinheiro`, `pagamento_cartao`, `inicio_atendimento`, `fim_atendimento`, `imagem_servico`) VALUES
(1, 1, 25, 'FAÇO TESTEEEEEEEEE', 1, 1, 1, 1, '11:11:00', '11:11:00', 'http://www.egewgegwetgwe4tg.com/aaewfwea'),
(2, 1, 25, 'FAÇO TESTEEEEEEEEE', 1, 1, 1, 1, '11:11:00', '11:11:00', 'http://www.egewgegwetgwe4tg.com/aaewfwea'),
(3, 1, 25, 'FAÇO TESTEEEEEEEEE', 1, 1, 1, 1, '11:11:00', '11:11:00', 'http://www.egewgegwetgwe4tg.com/aaewfwea'),
(4, 1, 25, 'FAÇO TESTEEEEEEEEE', 1, 1, 1, 1, '11:11:00', '11:11:00', 'http://www.egewgegwetgwe4tg.com/aaewfwea');

-- --------------------------------------------------------

--
-- Estrutura da tabela `subcategorias`
--

DROP TABLE IF EXISTS `subcategorias`;
CREATE TABLE IF NOT EXISTS `subcategorias` (
  `idsubcategorias` int(11) NOT NULL AUTO_INCREMENT,
  `nome_subcategoria` varchar(100) NOT NULL,
  `fk_categoria` int(11) NOT NULL,
  PRIMARY KEY (`idsubcategorias`),
  KEY `fk_categoria_idx` (`fk_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `subcategorias`
--

INSERT INTO `subcategorias` (`idsubcategorias`, `nome_subcategoria`, `fk_categoria`) VALUES
(8, 'Artesanato', 4),
(9, 'Fotografia', 4),
(10, 'Música', 4),
(11, 'Eletrodomésticos', 5),
(12, 'Eletrônicos', 5),
(13, 'Informática', 5),
(14, 'Barbeiro', 6),
(15, 'Cabeleireira', 6),
(16, 'Depilação', 6),
(17, 'Limpeza de Pele', 6),
(18, 'Maquiagem', 6),
(19, 'Manicure', 6),
(20, 'Pedicure', 6),
(21, 'Sobrancelha', 6),
(22, 'Tranças', 6),
(23, 'Consultoria', 7),
(24, 'Reformas e Reparos', 7),
(25, 'Serviços Automotivos', 7),
(26, 'Serviços de Limpeza', 7),
(27, 'Entrega/Carreto', 7),
(28, 'Cuidador', 7),
(29, 'Doces', 8),
(30, 'Salgados', 8),
(31, 'Refeições', 8),
(32, 'Corte e Costura', 9),
(33, 'Moda Feminina', 9),
(34, 'Moda Masculina', 9),
(35, 'Moda Plus Size', 9),
(36, 'Sapateiro', 9),
(37, 'Personal Trainer', 10),
(38, 'Podólogo', 10),
(39, 'Fisioterapeuta', 10),
(40, 'Massoterapeuta', 10),
(41, 'Outros', 11);

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `cadastrolojaprestador`
--
ALTER TABLE `cadastrolojaprestador`
  ADD CONSTRAINT `fk_cadastro_prestador` FOREIGN KEY (`fk_cadastro`) REFERENCES `cadastrobasico` (`iduser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_comment_loja` FOREIGN KEY (`fk_loja`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_comment_user` FOREIGN KEY (`fk_user`) REFERENCES `cadastrobasico` (`iduser`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `perguntas`
--
ALTER TABLE `perguntas`
  ADD CONSTRAINT `fk_pergunta_curso` FOREIGN KEY (`fk_curso`) REFERENCES `cursos` (`idcursos`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `portfolio`
--
ALTER TABLE `portfolio`
  ADD CONSTRAINT `fk_portfolio_prestador` FOREIGN KEY (`fk_lojaprestador`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `respostas_avaliacao`
--
ALTER TABLE `respostas_avaliacao`
  ADD CONSTRAINT `fk_resposta_pergunta_avaliacao` FOREIGN KEY (`id_pergunta`) REFERENCES `avaliacao_monitoramento` (`idavaliacaoMonitoramento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_resposta_prestador_avaliacao` FOREIGN KEY (`id_prestador`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `respostas_padrao`
--
ALTER TABLE `respostas_padrao`
  ADD CONSTRAINT `fk_pergunta_respostapadrao` FOREIGN KEY (`fk_pergunta`) REFERENCES `perguntas` (`idperguntas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `respostas_usuarios`
--
ALTER TABLE `respostas_usuarios`
  ADD CONSTRAINT `fk_pergunta_resposta` FOREIGN KEY (`fk_pergunta`) REFERENCES `perguntas` (`idperguntas`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_resposta_prestador` FOREIGN KEY (`fk_usuario`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_resposta_resppadrao` FOREIGN KEY (`resposta_usuario`) REFERENCES `respostas_padrao` (`idrespostas_padrao`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `servicos`
--
ALTER TABLE `servicos`
  ADD CONSTRAINT `fk_servico_prestador` FOREIGN KEY (`fk_lojaprestador`) REFERENCES `cadastrolojaprestador` (`idcadastrolojaprestador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_servico_subcategoria` FOREIGN KEY (`fk_subcategoria`) REFERENCES `subcategorias` (`idsubcategorias`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `subcategorias`
--
ALTER TABLE `subcategorias`
  ADD CONSTRAINT `fk_categoria` FOREIGN KEY (`fk_categoria`) REFERENCES `categorias_servico` (`idcategorias_servico`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
