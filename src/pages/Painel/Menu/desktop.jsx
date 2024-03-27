import React, { useState, useRef, useCallback, } from 'react'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components'

// Icons
import {
    IoIosArrowDropdownCircle,
    IoIosArrowDropupCircle,
    IoIosArrowRoundBack
} from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

import { FaBell, FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { PrimaryTitle } from 'components/Titles-styled';

function MenuDesktop() {

    const Header = styled.header`
    align-items: center;
    background-color: #F7F7F7;
    box-shadow: 0 0 10px .3px rgba(0, 0, 0, .1);
    display: flex;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    height: 100%;
    max-width: 340px;
    padding: 2rem 0;
    width: 30%;
    `

    const ContainerLateral = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 2rem 1rem;
        transition: 1s;
        width: 100%;
        z-index: 99;

        div.conteudo {
            align-items: center;
            display: flex;
            flex-direction: column;
            gap: 3rem;

            header {
                align-items: center;
                display: flex;
                justify-content: space-between;

                h2 {
                    color: #D61919;
                }

                svg:active, svg:hover {
                    fill: #D61919;
                    cursor: pointer;
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

                    li:hover {
                        cursor: pointer;
                    }

                    li.sublist {

                        ul {

                            li {
                                border: 1px solid transparent;
                                color: rgb(100, 100, 100);
                                padding: .3rem .5rem;
                                margin-block: .5rem;

                                &:active, &:hover {
                                    background-color: rgba(70, 70, 70, .05);
                                    border-radius: 7px;
                                    color: rgb(252, 89, 89);
                                    cursor: pointer;
                                    transition: .3s;
                                }
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

                {
                    <ContainerLateral>
                            <div className="conteudo">

                                <PrimaryTitle desktop="on" size="2.2">Park Ease</PrimaryTitle>

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

                    </ContainerLateral>

                }

            </Header>

        </>

    )
}

export default MenuDesktop