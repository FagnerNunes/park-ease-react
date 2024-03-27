<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Credentials: true");

require_once 'config.php';
require_once CONTROLLER . 'Rotas.php';
require_once MODEL . 'User.php';

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $dados = json_decode(file_get_contents('php://input'), true);

    $rota = $_GET['rota'];

    try {

        new Rotas($rota, $dados);

    } catch (Exception $e) {

        echo json_encode(['status' => 'error', 'mensagem' => $e]);
    }

} else {
    http_response_code(404);
    echo json_encode(['status' => 'error', 'mensagem' => 'Não foi possivel consultar API.']);

}