<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require 'config.php';
require CONTROLLER . 'Rotas.php';

if ($_SERVER['REQUEST_METHOD']) {

    $dados = json_decode(file_get_contents('php://input'), true);

    $funcName = trim($dados['acao']);

    try {

        return Rotas::$funcName($dados);

    } catch (Exception $e) {

        echo json_encode(['status' => 'error', 'mensagem' => $e]);

    }

} else {
    http_response_code(404);
    echo json_encode(['status' => 'error', 'mensagem' => 'Não há requisição ou não foi possivel consultar API.']);
}

