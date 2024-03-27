<?php

class Rotas {

    public static $response;
    public static $status;
    private static $User;
    protected static $req_permitidas = [ 'user/login', 'user/cadastro' ];

    public function __construct($requisicao, $dados)
    {

        if(in_array($requisicao, self::$req_permitidas)) {

            self::$User = new User();

            $acao = explode('/', $requisicao)[1];

            switch($acao)
            {

                case 'login':
                    self::login($dados);
                    break;

                case 'cadastro':
                    self::cadastro($dados);
                    break;

                default:

                    self::$status = 'erro';
                    self::$response = 'Requisição inválida.';
                    self::response(406);
            }

        } else {


            self::$status = 'erro';
            self::$response = 'Requisição inválida ou não permitida.';
            self::response(404);

        }


    }

    public static function login($dados)
    {

        $user = $dados['user_login'];
        $senha = $dados['user_password'];

        try {

            if(self::$User->get($user, $senha)){

                self::$status = 'success';
                self::$response = $_SESSION['USER'];
                self::response(200);

            } else {

                self::$status = 'error';
                self::$response = 'Login ou senha inválidos, verifique suas credenciais de aceso!';
                self::response(401);

            }

        } catch (Exception $e) {

            self::$status = 'erro';
            self::$response = 'Ocorreu um erro ao logar' . $e;
            self::response(500);
        }
    }

    public static function cadastro($dados)
    {

        $user = $dados['user_login'];
        $senha = $dados['user_password'];

        try {

            if(self::$User->post($user, $senha)) {

                self::$status = 'success';
                self::$response = 'Usuario cadastrado com sucesso!';
                self::response(200);

            } else {

                self::$status = 'error';
                self::$response = 'Não foi possível fazer cadastro!';
                self::response(401);
            }

        } catch (Exception $e) {
            echo json_encode(['Erro' => "Ocorreu um erro ao cadastrar usuário $e"]);
        }

    }

    public static function response($code = 200)
    {

        echo json_encode([
            'status' => self::$status,
            'response' => self::$response,
        ]);
        http_response_code($code);

    }

    public static function responseTest($response)
    {

        echo json_encode([
            'status' => 'teste',
            'response' => $response,
        ]);

    }
}