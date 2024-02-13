<?php

include MODEL . 'User.php';

class Rotas {

    public static function Logar($dados)
    {
        $User = new User();

        $user = $dados['user_login'];
        $senha = $dados['user_password'];

        try {

            if($User->get($user, $senha)) {

                if (session_status() == PHP_SESSION_NONE) {
                    session_start();
                }

                http_response_code(200);
                echo json_encode([
                    'status' => 'success',
                    'response' => $_SESSION['USER']
                ]);

            } else {
                http_response_code(401);
                echo json_encode([
                    'status' => 'Error',
                    'menssagem' => 'Login ou senha inválidos, verifique suas credenciais de aceso!'
                ]);

            }

        } catch (Exception $e) {
            echo json_encode(['Erro' => "Ocorreu um erro ao logar $e"]);
        }
    }

    public static function Cadastrar($dados)
    {

        $User = new User();

        $user = $dados['user_login'];
        $senha = $dados['user_password'];

        try {

            if($User->post($user, $senha)) {
                http_response_code(200);
                echo json_encode([
                    'status' => 'success',
                    'response' => 'Usuario Cadastrado com sucesso!'
                ]);

            } else {
                http_response_code(401);
                echo json_encode([
                    'status' => 'Error',
                    'menssagem' => 'Não foi possível fazer cadastro!'
                ]);

            }

        } catch (Exception $e) {
            echo json_encode(['Erro' => "Ocorreu um erro ao cadastrar usuário $e"]);
        }

    }
}