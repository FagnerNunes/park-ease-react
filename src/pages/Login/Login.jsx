import React, { useState } from 'react'
import imageLogin from 'assets/images/login/bg-estacionamento.jpg'
import { ContainerGeral, ContainerLogin } from 'components/style-login'

import API from 'pages/Api/Auth'

function Login() {

    const [dataLogin, setDataLogin] = useState({
        user_login: '', user_password: ''
    })

    const handleSubmitLogin = (e) => {
        
        e.preventDefault()

        const dataAuth = {
            user: dataLogin,
            acao: 'Logar'
        }

        try {
            
            API.Login(dataAuth).then(res => {
                console.log(res.data)
            })
            
        } catch (error) {
            console.log('Erro na requisição ' + error)
        }

    }

    return (

        <ContainerGeral>

            <ContainerLogin bglogin={imageLogin}>

                <div className='container-img'></div>

                <form onSubmit={handleSubmitLogin} className='container-form'>
                    <h1>Park Ease</h1>

                    <fieldset>
                        <input type='text' id='inputLogin'  placeholder='Login' autoComplete='false' onChange={(e) => setDataLogin((obj) => {
                            return {...obj, user_login: e.target.value}
                        })}/>

                        <input type='password' id='inputPassword' placeholder='Senha' autoComplete='false' onChange={(e) => setDataLogin((obj) => {
                            return {...obj, user_password: e.target.value}
                        })}/>

                        <button type='submit'>Entrar</button>

                    </fieldset>

                    <div className="opcoes">
                        <a href="">Esqueci minha senha</a>
                        <a href="">Cadastre-se</a>
                    </div>

                </form>

            </ContainerLogin>

        </ContainerGeral>

    );
}

export default Login;
