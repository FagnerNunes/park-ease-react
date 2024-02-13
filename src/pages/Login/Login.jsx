import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import imageLogin from 'assets/images/login/bg-estacionamento.jpg'
import bgCity from 'assets/images/login/city-nature.jpg'

//Styled components
import { ContainerGeral, ContainerLogin } from 'components/Login-styled'
import { PrimaryButton } from 'components/Buttons-styled'
import { PrimaryInput } from 'components/Inputs-styled'
import { PrimaryTitle } from 'components/Titles-styled'
import { PrimaryForm } from 'components/Forms-styled'
import { ErrorMsg } from 'components/Errors-styled'
import Loader from 'components/Loader'

//API
import API from 'pages/Api/Auth'

import { userLogin } from '../../redux/user/actions';

function Login() {

    const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
    const dispatch = useDispatch()

    const [dataLogin, setDataLogin] = useState({
        user_login: '', user_password: '', acao: 'Logar'
    })

    const [loader, setLoader] = useState(false)

    const [error, setError] = useState(false)

    const handleSubmitLogin = async (e) => {

        e.preventDefault()

        console.log({currentUser})

        try {

            setLoader(true)

            const { data } = await API.Login(dataLogin)


            if(data.status === 'success') {

                dispatch(userLogin(data.response))

            }

        } catch (error) {

            console.log('Erro na requisição ' + error)
            setError(true)

        } finally {
            setLoader(false)
        }

    }

    return (
        <>

            {
                loader && <Loader />
            }

            <ContainerGeral bgcity={bgCity}>

                <ContainerLogin bglogin={imageLogin}>

                    <div className='container-img'></div>

                    <PrimaryForm onSubmit={handleSubmitLogin} className='container-form'>
                        <PrimaryTitle>Park Ease</PrimaryTitle>

                        <fieldset>
                            <PrimaryInput type='text' id='inputLogin' placeholder='Login' autoComplete='false' onChange={(e) => setDataLogin((obj) => {
                                return { ...obj, user_login: e.target.value }
                            })} />

                            <PrimaryInput type='password' id='inputPassword' placeholder='Senha' autoComplete='false' onChange={(e) => setDataLogin((obj) => {
                                return { ...obj, user_password: e.target.value }
                            })} />

                            <PrimaryButton type='submit'>Entrar</PrimaryButton>

                        </fieldset>

                        <div className="opcoes">
                            <Link to="#">Esqueci minha senha</Link>
                            <Link to="/Cadastro">Cadastre-se</Link>
                        </div>

                        {
                            error && (
                                <ErrorMsg>
                                    <p>Usuário ou senha incorretos!</p>
                                </ErrorMsg>
                            )
                        }


                    </PrimaryForm>

                </ContainerLogin>

            </ContainerGeral>

        </>
    );
}

export default Login;
