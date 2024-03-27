import React from 'react'
import styled from 'styled-components'

import { BiSolidCoinStack } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";
import { CgMathPlus } from "react-icons/cg";

const CardsValores = ({ cards }) => {

    const Wrapper = styled.div`
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: 1.4rem;
        justify-content: center;
        width: 100%;
    `

    const Card = styled.div`
        background-color: #FAFAFA;
        border: 1px solid rgba(119, 119, 119, .4);
        border-radius: 14px;
        box-shadow: 0 0 10px .3px rgba(50, 50, 50, .1);
        max-width: 330px;
        padding: .6rem;
        width: 100%;
    `

    const ConteudoCard = styled.div`
        border-radius: 7px;
        background-color: #F1F1F1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 1.5rem;
        width: 100%;

        .conteudo {
            display: flex;
            justify-content: space-around;

            .left, .right {
                align-items: flex-end;
                display: flex;
                flex-direction: column;
                gap: .5rem;
                justify-content: center;

                p {
                    background-color: #fff;
                    border-radius: 7px;
                    padding: .3rem;
                    font-size: 1.1rem;
                    text-align: center;
                    width: 100%;
                }

                .topo {
                    align-items: center;
                    display: flex;

                    p {
                        background: none;
                    }
                }

            }
        }
    `

    const ContainerBtn = styled.div`
        width: 330px;

        @media (min-width: 1455px) {
            width: auto;
        }
    `

    const BtnCriarCard = styled.button`
        background-color: #FAFAFA;
        border: none;
        border: 1px solid rgba(119, 119, 119, .1);
        border-radius: 14px;
        box-shadow: 0 0 10px .3px rgba(50, 50, 50, .05);
        align-items: center;
        padding-block: .7rem;
        display: flex;
        justify-content: center;
        margin: 0 auto;
        max-width: 330px;
        transition: .3s;
        width: 40px;

        &:active, &:hover {
            background-color: #F7F7F7;
            box-shadow: 0 0 10px .3px rgba(50, 50, 50, .1);
            border: 1px solid rgba(119, 119, 119, .2);
            cursor: pointer;
            transition: .3s;
        }
    `

    return (
        <>
            <Wrapper>

                <h4 style={{
                    color: '#222',
                    fontSize: 22,
                    textAlign: 'center',
                    width: '100%',
                }}>Valores por hora</h4>

                {

                    cards ? cards.map((card, index) => {
                        return (

                            <Card key={index}>

                                <ConteudoCard>

                                    <div className="conteudo">
                                        <div className='left'>

                                            <div className='topo'>
                                                <FaClock color='#555' size={22} />
                                                <p>Tempo</p>
                                            </div>

                                            <p>{card.tempo} {card.tempo > 1 ? 'horas' : 'hora'}</p>

                                        </div>
                                        <div className='right'>
                                            <div className='topo'>
                                                <BiSolidCoinStack color='#555' size={26} />
                                                <p>Valor</p>
                                            </div>

                                            <p>{card.valor}</p>
                                        </div>
                                    </div>

                                </ConteudoCard>

                            </Card>

                        )
                    }) : 'Não há valores cadastrados no estacionamento!'

                }

                <ContainerBtn>
                    <BtnCriarCard type='button' onClick={() => console.log('Criar card')}>

                        <CgMathPlus color='rgba(119, 119, 119, .5)' />

                    </BtnCriarCard>
                </ContainerBtn>

            </Wrapper>


        </>
    )
}

export default CardsValores