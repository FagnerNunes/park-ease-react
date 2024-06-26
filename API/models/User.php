<?php

class User
{
    protected static $conexao = null;

    function __construct()
    {
        try {

            $config = parse_ini_file(DATABASE . 'config.ini');

            $host = $config['host'];
            $dbname = $config['dbname'];
            $username = $config['username'];
            $password = $config['password'];

            self::$conexao = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);

            self::$conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            // Em caso de erro na conexão
            echo "Falha na conexão: " . $e->getMessage();
        }
    }

    public function get($user, $senha)
    {
        try {

            session_start();

            self::$conexao->beginTransaction();

            $stmt = self::$conexao->prepare("SELECT * FROM users WHERE user_login = :user;");
            $stmt->bindValue(':user', $user);
            $stmt->execute();

            if ($stmt->rowCount() > 0) {

                $row = $stmt->fetch(PDO::FETCH_ASSOC);

                if (password_verify($senha, $row['user_password'])) {


                    $_SESSION['USER']['id'] = $row['id'];
                    $_SESSION['USER']['login'] = $row['user_login'];
                    $_SESSION['USER']['senha'] = $row['user_password'];
                    $_SESSION['USER']['sessaoLogin'] = self::session_login($row['id']);
                    $_SESSION['USER']['token'] = password_hash($row['user_login'], PASSWORD_DEFAULT);

                    self::$conexao->commit();

                    return true;
                } else {

                    session_destroy();
                    self::$conexao->rollBack();
                    return false;
                }
            } else {

                session_destroy();
                return false;
            }
        } catch (\Exception $ex) {
            return $ex->getMessage();
        }
    }

    public function post($user, $senha)
    {
        try {

            self::$conexao->beginTransaction();

            $senhaPassword =  password_hash($senha, PASSWORD_DEFAULT);

            $stmt = self::$conexao->prepare("INSERT INTO users (user_login, user_password) VALUES (:user, :senha)");
            $stmt->bindValue(':user', $user);
            $stmt->bindValue(':senha', $senhaPassword);
            $stmt->execute();

            self::$conexao->commit();

            return true;
        } catch (\Exception $ex) {
            error_log("Erro na inserção de usuário: " . $ex->getMessage());
            self::$conexao->rollBack();
            return false;
        }
    }

    public static function session_login($id)
    {
        try {
            date_default_timezone_set('America/Sao_Paulo');

            $novaSessao = date('Y-m-d H:i');

            $stmt = self::$conexao->prepare("UPDATE users SET sessao_login = :novaSessao WHERE id_user = :idUser");
            $stmt->bindValue(':novaSessao', $novaSessao);
            $stmt->bindValue(':idUser', $id);
            $stmt->execute();

            return $novaSessao;
        } catch (\Exception $ex) {
            error_log("Erro na inserção de sessão do usuário: " . $ex->getMessage());
            return false;
        }
    }
}
