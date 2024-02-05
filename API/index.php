<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: *');

if($_SERVER['REQUEST_METHOD']) {

    $data = json_decode(file_get_contents('php://input'), true);

    echo json_encode($data);

}