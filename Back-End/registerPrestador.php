<?php

header("Access-Control-Allow-Origin:*"); // Permite que outras aplicações consumam a api
header("Content-type: application/json"); //Indicação de arquivo JSON

require "./Models/PrestadorServicos.php";

$prestador = new PrestadorServicos;
$prestador->nome_fantasia = $_POST['nomefantasia'];
$prestador->telefone = $_POST['telefone'];
$prestador->email = $_POST['email'];
$prestador->logradouro = $_POST['rua'];
$prestador->numero = $_POST['numero'];
$prestador->bairro = $_POST['bairro'];
$prestador->estado = $_POST['estado'];
$prestador->cidade = $_POST['cidade'];
$prestador->senha = md5($_POST['senha']);
$prestador->pontuacao = 0;
$prestador->atividades = 0;
$prestador->imagem = null;
$prestador->descricao = $_POST["descricao"];


if (isset($_POST['cep'])) {
    $cep = $_POST['cep'];
    $cep = filterCep($cep);

    if (isCep($cep)) {
        $prestador->cep = $cep;
        $address = getAddressViaCep($cep);
        if (property_exists($address, 'erro')) {
            http_response_code(406);
            print_r(
                json_encode(
                    array('mensagem' => "CEP não encontrado")
                )
            );
        } else if ($address->bairro === "Paraisópolis") {
            if (strlen($prestador->nome_fantasia) >= 1 && strlen($prestador->telefone) >= 8 && strlen($prestador->email) >= 6 && strlen($prestador->numero) >= 1 && strlen($prestador->bairro) >= 1 && strlen($prestador->logradouro) >= 5 && strlen($prestador->estado) == 2 && strlen($prestador->cidade) >= 1) {
                $validate = $prestador->registerPrestador();
                if ($validate == true) {
                    http_response_code(201);
                    print_r(
                        json_encode(
                            array(
                                'mensagem' => 'Cadastro feito com sucesso, agora faça login novamente para acessar as funcionalidades'
                            )
                        )
                    );
                } else {
                    http_response_code(202);
                    print_r(
                        json_encode(
                            array(
                                'mensagem' => 'Falha na inserção de dados'
                            )
                        )
                    );
                }
            } else if(strlen($prestador->nome_fantasia) < 1){
                http_response_code(406);
                print_r(
                    json_encode(
                        array(
                            'mensagem' => 'É necessário o nome fantasia do negócio'
                        )
                    )
                );
            } else if(strlen($prestador->telefone) < 8){
                http_response_code(406);
                print_r(
                    json_encode(
                        array(
                            'mensagem' => 'O número de telefone deve ter pelo menos 8 dígitos'
                        )
                    )
                );
            } else if(strlen($prestador->email) < 6){
                http_response_code(406);
                print_r(
                    json_encode(
                        array(
                            'mensagem' => 'Por favor, não apague os dados do localStorage, são necesários para utilizar as funcionalidades enquanto estiver logado'
                        )
                    )
                );
            } else if(strlen($prestador->numero) < 1){
                http_response_code(406);
                print_r(
                    json_encode(
                        array(
                            'mensagem' => 'Você precisa de um número no endereço para se cadastrar'
                        )
                    )
                );
            } else if(strlen($prestador->bairro) < 1){
                http_response_code(406);
                print_r(
                    json_encode(
                        array(
                            'mensagem' => 'Você precisa de um bairro no endereço para se cadastrar'
                        )
                    )
                );
            } else if(strlen($prestador->estado) != 2){
                http_response_code(406);
                print_r(
                    json_encode(
                        array(
                            'mensagem' => 'O estado deve ser uma sigla de 2 caracteres'
                        )
                    )
                );
            } else if(strlen($prestador->logradouro) < 5){
                http_response_code(406);
                print_r(
                    json_encode(
                        array(
                            'mensagem' => 'A rua do endereço deve conter pelo menos 5 caracteres'
                        )
                    )
                );
            } else if(strlen($prestador->cidade) < 1){
                http_response_code(406);
                print_r(
                    json_encode(
                        array(
                            'mensagem' => 'O nome da cidade é necessário'
                        )
                    )
                );
            }

        } else {
            http_response_code(406);
            print_r(
                json_encode(
                    array('mensagem' => "Sentimos muito, no momento só trabalhamos com negócios em Paraisópolis!")
                )
            );
        }
    } else {
        http_response_code(406);
        print_r(
            json_encode(
                array('mensagem' => "CEP inválido")
            )
        );
    }
} else {
    http_response_code(400);
    print_r(
        json_encode(
            array('mensagem' => "É necessário um CEP para fazer cadastro")
        )
    );
}

function addressEmpty()
{
    return (object) [
        'cep' => '',
        'logradouro' => '',
        'bairro' => '',
        'localidade' => '',
        'uf' => ''
    ];
}

function filterCep(String $cep): String
{
    return preg_replace('/[^0-9]/', '', $cep);
}

function isCep(String $cep): bool
{
    return preg_match('/^[0-9]{5}-?[0-9]{3}$/', $cep);
}

function getAddressViaCep(String $cep)
{
    $url = "https://viacep.com.br/ws/{$cep}/json/";
    return json_decode(file_get_contents($url));
}
