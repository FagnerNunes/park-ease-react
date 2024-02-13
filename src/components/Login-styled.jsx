import styled from "styled-components";

export const ContainerGeral = styled.div`
    background-color: #fff9f9;
    background-image: url(${(props => props.bgcity ?? '')});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: grid;
    height: 100vh;
    place-items: center;
    position: relative;
    width: 100%;

    &::after {
        background-color: #fff9f9;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        opacity: .9;
        top: 0;
        width: 100%;
    }
`

export const ContainerLogin = styled.div`
    align-items: center;
    background-color: rgba(255, 249, 249, .9);
    backdrop-filter: blur(4px);
    border-radius: .5rem;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;
    z-index: 2;

    .container-img {
        background-color: #fff9f9;
        background-image: url(${(props) => props.bglogin || ''});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
        position: absolute;
        width: 100%;
    }

    .opcoes {
        display: flex;
        justify-content: center;
        gap: 1rem;
        width: 100%;

        a {
            color: #B1B1B1;
            font-size: clamp(.9rem, 2vw, 1rem);
            text-decoration: none;
            transition: .3s;

            &:hover {
                color: #999;
                text-decoration: underline;
                transition: .3s;
            }
        }
    }

    @media (min-width: 1024px) {

        box-shadow: 0 0 10px .1px rgba(0, 0, 0, .1);
        height: auto;
        max-width: 1200px;

        .container-img {
            border-radius: .5rem 0 0 .5rem;
            height: 500px;
            max-width: 800px;
            position: relative;
        }

        .opcoes {
            gap: 2rem;
        }
    }
`

