import styled from "styled-components";

export const PrimaryButton = styled.button`

    background-color: rgb(226, 29, 29);
    border: 1px solid transparent;
    box-shadow: 0 1px 3px .5px rgba(0, 0, 0, .2);
    color: white;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: .5px;
    padding: .5rem;
    transition: .3s;

    &:active {
        background-color: rgba(223, 41, 41, .8);
        box-shadow: 0 0 10px .1px rgba(255, 255, 255, 0.5);
        color: #fff;
    }

    @media (min-width: 1024px) {

        box-shadow: 0 0 5px .1px rgba(0, 0, 0, .1);

        &:hover {
            background-color: rgb(187, 29, 29);
            box-shadow: 0 0 10px .1px rgba(255, 255, 255, 0.5);
            color: #fff;
            transition: all.3s;
        }
    }
`