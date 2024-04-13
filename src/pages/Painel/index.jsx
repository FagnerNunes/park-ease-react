import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// Styled Components
import { ContainerPainel, ContainerConteudo, Conteudo } from 'components/Painel'

// Components
import SelectEmpresa from './SelecaoEmpresa';
import CardsValores from './Valores';
import Topo from './TopoOpcoes';

import MenuDesktop from './Menu/desktop';
import MenuMobile from './Menu/mobile';
import Menu from './Menu/index';


function Painel() {

    const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)

    const [windowSize, setWindowSize] = useState({ width: window.innerWidth })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth })
        };

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    // const userLogged = {
    //     id: currentUser.id,
    //     nome: currentUser.login,
    //     senha: currentUser.senha,
    //     sessao: currentUser.sessaoLogin,
    //     token: currentUser.token
    // }

    const opcoes = [
        { value: 'Estacionamento SP' },
        { value: 'Pare aqui - Estacionamento' }
    ]

    const cardsValores = [
        { tempo: 1, valor: '12,50' },
        { tempo: 3, valor: '30,00' },
        { tempo: 24, valor: '170,00' }
    ]

    return (

        <>
            <ContainerPainel style={{display: windowSize.width < 1024 ? 'block' : 'flex'}}>

                <Menu />

                <ContainerConteudo style={{padding: windowSize.width >= 1024 && '0'}}>

                    {
                        windowSize.width >= 1024 ? <Topo options={opcoes} /> : <SelectEmpresa options={opcoes} action={() => console.log('Click adicionar empresa')} />
                    }

                    <CardsValores cards={cardsValores} />

                </ContainerConteudo>

            </ContainerPainel>

        </>

    )
}

export default Painel