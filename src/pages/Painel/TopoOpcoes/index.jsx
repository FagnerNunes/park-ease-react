import React from 'react'
import styled from 'styled-components'

import SelectEmpresa from '../SelecaoEmpresa'

import { FaBell, FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function Topo({ options }) {

    const Container = styled.div`
        align-items: center;
        box-shadow: 10px .5px 10px .3px rgba(0, 0, 0, .1);
        background-color: #F7F7F7;
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;
        padding: 2rem 4rem;
        width: 100%;

        .options {
            align-content: center;
            display: flex;
            gap: 1rem;

            svg {

            }

            svg:hover {
                cursor: pointer;
                fill: rgba(214, 25, 25, .9);
                transition: .3s;
            }
        }
    `

    return (
        <Container>
            <div className='selecao'>
                <SelectEmpresa options={options} action={() => console.log('Click adicionar empresa')} />
            </div>

            <div className="options">
                <span onClick={() => console.log('Configurações do usuário')}><FaUserCircle size={30} color='#555' /></span>
                <span onClick={() => console.log('Notificações')}><FaBell size={30} color='#555' /></span>
                <span onClick={() => console.log('Configurações')}><FaGear size={30} color='#555' /></span>
            </div>
        </Container>
    )
}

export default Topo