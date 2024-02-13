import styled from "styled-components";

export const PrimaryInput = styled.input`
    border: 1px solid transparent;
    padding: .5rem;
    transition: .3s;

    &:active {
        box-shadow: 0 1px 3px .5px rgb(226, 29, 29);
        transition: .3s;
    }

    @media (min-width: 1024px) {

        box-shadow: 0 0 5px .1px rgba(0, 0, 0, .1);

        &:hover, &:focus {
            box-shadow: 0 1px 3px .3px rgba(226, 29, 29, .8);
            transition: .3s;
        }
    }
`