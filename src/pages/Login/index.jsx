import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
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

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [dataLogin, setDataLogin] = useState({
        user_login: '', user_password: ''
    })

    const [loader, setLoader] = useState(false)

    const [error, setError] = useState({
        active: false, mensagem: ''
    })


    const handleSubmitLogin = async (e) => {

        e.preventDefault()
        setLoader(true)

        try {

            const data = await API.Login(dataLogin)

            console.log(data)

            if(data.status === 'success') {

                dispatch(userLogin(data.response))
                navigate('/')

            }

        } catch (error) {

            if (error.response.data.response) {

                const mensagemDeErro = error.response.data.response;

                setError((prev) => ({ ...prev, active: false, mensagem: mensagemDeErro }));
            } else {

                setError((prev) => ({ ...prev, active: false, mensagem: 'Não foi possível realizar a requisição.' }));
            }

            setLoader(false)

        } finally {
            setError((prev) => {
                return {...prev, active: false}
            })
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
                            error.mensagem !== '' && (
                                <ErrorMsg>
                                    <p>{error.mensagem}</p>
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
