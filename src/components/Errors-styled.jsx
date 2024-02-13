import styled from 'styled-components'

export const ErrorMsg = styled.div`

    background-color: rgba(210, 210, 210, .9);
    display: flex;
    justify-content: center;
    padding-block: .5rem;
    width: 100%;

    p {
        color: #ad3232;
    }

    @media (min-width: 1024px) {
        background-color: rgba(230, 120, 120, .1);

    }
`