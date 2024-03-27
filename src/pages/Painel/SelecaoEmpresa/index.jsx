import React from 'react'
import styled from 'styled-components'

import { IoAddSharp } from "react-icons/io5";


const SelectEmpresa = ({ options, action }) => {

    const ContainerSelect = styled.div`
        align-items: center;
        display: flex;
        justify-content: center;
        gap: .5rem;
        width: 100%;
    `

    const Select = styled.select`
        border: 1px solid #777;
        border-radius: 5px;
        min-width: 280px;
        padding: .5rem;
    `

    const Option = styled.option`
        padding: .5rem;
    `

    const Button = styled.button`
        align-items: center;
        background: none;
        border: none;
        border: 1px solid #777;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        padding: .6rem;
        transition: .3s;

        &:active, &:hover {
            background-color: rgba(255, 255, 255, 1);
            cursor: pointer;
            transition: .3s;
        }
    `

    return (

        <ContainerSelect>
            <Select>
                {
                    options.map((option, index) => {
                        return <Option key={index}>{option.value}</Option>
                    })
                }
            </Select>

            {
                action && (
                    <Button type='button' onClick={action}>
                        <IoAddSharp size={22} />
                    </Button>
                )
            }

        </ContainerSelect>

    )
}

export default SelectEmpresa