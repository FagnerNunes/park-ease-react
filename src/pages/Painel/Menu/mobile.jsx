import React, { useState, useRef, useCallback, } from 'react'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components'

import { PrimaryTitle } from 'components/Titles-styled';

// Icons
import {
    IoIosArrowDropdownCircle,
    IoIosArrowDropupCircle,
    IoIosArrowRoundBack
} from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

import { FaBell, FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

function MenuMobile() {

    const Header = styled.header`
        align-items: center;
        background-color: #F7F7F7;
        box-shadow: 0 0 10px .3px rgba(0, 0, 0, .1);
        display: flex;
        justify-content: space-between;
        font-family: 'Poppins', sans-serif;
        padding: 2rem;
        width: 100%;
    `

    const ContainerMenu = styled.div`
        background-color: #F1F1F1;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        left: 0;
        padding: 2rem;
        position: absolute;
        top: 0;
        transition: 1s;
        width: 100%;
        z-index: 99;

        div.conteudo {
            display: flex;
            flex-direction: column;
            gap: 3rem;

            .topo {
                align-items: center;
                display: flex;
                justify-content: space-between;

                h2 {
                    color: #D61919;
                }

                svg:active {
                    fill: #D61919;
                }
            }

            nav {

            ul {
                list-style-type: none;
            }

            ul.base {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                padding-block: .6rem;

                    span {
                        align-items: center;
                        display: flex;
                        gap: .5rem;
                    }

                    li.sublist {

                        ul {

                            li {
                                border: 1px solid transparent;
                                color: rgb(100, 100, 100);
                                padding: .3rem .5rem;
                                margin-block: .5rem;

                                &:active {
                                    background-color: rgba(70, 70, 70, .05);
                                    border-radius: 7px;
                                }
                            }

                            li.active {
                                color: rgb(252, 89, 89);
                            }
                        }
                    }
                }
            }
        }


        div.options {
            align-items: center;
            display: flex;
            gap: .5rem;

            span {
                padding: .5rem;

                &:active {
                    background-color: rgba(90, 90, 90, .02);

                    svg {
                        fill: #D61919;
                    }
                }
            }
        }
    `

    const [dropControleFinanceiro, setDropControleFinanceiro] = useState(false)
    const [dropControleVagas, setDropControleVagas] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const animationMenu = useSpring({
        config: {
            duration: 400,
        },
        opacity: showMenu ? '1' : '0',
        zIndex: showMenu ? '999' : '-1',
    })

    const animationSubMenu = useSpring({
        height: dropControleFinanceiro ? '100%' : '0px',
        overflow: 'hidden',
        config: { duration: 200 },
    });

    const animationSubMenu2 = useSpring({
        height: dropControleVagas ? '100%' : '0px',
        overflow: 'hidden',
        config: { duration: 200 },
    });

    const openMenu = () => setShowMenu(prev => !prev)

    return (

        <>
            <Header>

                <PrimaryTitle desktop="on">Park Ease</PrimaryTitle>
                {
                    showMenu ? (
                        <ContainerMenu>
                            <animated.div style={animationMenu}>
                                <div className="conteudo">
                                    <div className='topo'>
                                        <h2 desktop="on">Park Ease</h2>
                                        <IoIosArrowRoundBack onClick={openMenu ?? ''} size={40} />
                                    </div>
                                    <nav>
                                        <ul className='base'>
                                            <li className='sublist'><span onClick={() => setDropControleFinanceiro(prev => !prev)}>
                                                Controle Financeiro
                                                {
                                                    dropControleFinanceiro ? <IoIosArrowDropupCircle size={15} /> : <IoIosArrowDropdownCircle size={15} />
                                                }
                                            </span>
                                                <animated.div style={animationSubMenu}>
                                                    <ul>

                                                        <li>Valores</li>
                                                        <li>Rendimentos</li>

                                                    </ul>
                                                </animated.div>
                                            </li>

                                            <li className='sublist'><span onClick={() => setDropControleVagas(prev => !prev)}>
                                                Controle de Vagas
                                                {
                                                    dropControleVagas ? <IoIosArrowDropupCircle size={15} /> : <IoIosArrowDropdownCircle size={15} />
                                                }
                                            </span>
                                                <animated.div style={animationSubMenu2}>
                                                    <ul>
                                                        <li>Vagas Disponíveis</li>
                                                        <li>Vagas Ocupadas</li>
                                                        <li>Vagas Reservadas  </li>
                                                    </ul>
                                                </animated.div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </animated.div>

                            <div className="options">
                                <span onClick={() => console.log('Configurações do usuário')}><FaUserCircle size={22} color='#222' /></span>
                                <span onClick={() => console.log('Notificações')}><FaBell size={22} color='#222' /></span>
                                <span onClick={() => console.log('Configurações')}><FaGear size={22} color='#222' /></span>
                            </div>
                        </ContainerMenu>

                    ) : <RiMenu3Fill size={40} onClick={openMenu ?? ''} />
                }

            </Header>

        </>

    )
}

export default MenuMobile