import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import imageCadastro from 'assets/images/login/bg-estacionamento.jpg'
import bgCity from 'assets/images/login/city-nature.jpg'
import { ContainerGeral, ContainerLogin } from 'components/Login-styled'
import { PrimaryButton } from 'components/Buttons-styled'
import { PrimaryInput } from 'components/Inputs-styled'
import { SecondTitle } from 'components/Titles-styled'
import { PrimaryForm } from 'components/Forms-styled'
import { ErrorMsg } from 'components/Errors-styled';
import Loader from 'components/Loader'

import API from 'pages/Api/Auth'

function Cadastro() {

    const navigate = useNavigate();

    const [dataCadastro, setDataCadastro] = useState({
        user_login: '', user_password: ''
    })

    const [error, setError] = useState({
        active: false, mensagem: ''
    })

    const [loader, setLoader] = useState(false)

    const handleSubmitCadastro = async (e) => {

        e.preventDefault()

        try {
            setLoader(true)

            const data = await API.Cadastro(dataCadastro)

            if(data.status === 'success') {
                alert('Usuário cadastrado com sucesso! Agora é só fazer login')
                navigate('/Login')
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

                <ContainerLogin bglogin={imageCadastro}>

                    <div className='container-img'></div>

                    <PrimaryForm onSubmit={handleSubmitCadastro} className='container-form'>

                        <SecondTitle>Cadastre-se</SecondTitle>

                        <fieldset>

                            <PrimaryInput type='text' id='inputLogin' placeholder='Nome de usuário' autoComplete='false' value={dataCadastro.user_login} onChange={(e) => setDataCadastro((obj) => {
                                return { ...obj, user_login: e.target.value }
                            })} />

                            <PrimaryInput type='password' id='inputPassword' placeholder='Digite sua nova senha' autoComplete='false' value={dataCadastro.user_password} onChange={(e) => setDataCadastro((obj) => {
                                return { ...obj, user_password: e.target.value }
                            })} />

                            <PrimaryButton type='submit'>Cadastrar</PrimaryButton>

                        </fieldset>

                        <div className="opcoes">
                            <Link to="/Login">Fazer login</Link>
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

export default Cadastro;
