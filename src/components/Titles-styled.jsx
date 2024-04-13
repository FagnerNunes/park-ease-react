import styled from "styled-components";

export const PrimaryTitle = styled.h1`
    color: ${(props) => props.desktop ? 'rgb(214, 25, 25)' : '#fff9f9' };
    font-size: ${(props) => props.size ? props.size + 'rem' : 'clamp(2rem, 3vw, 2.5rem)'};
    text-shadow: ${(props) => props.desktop ? '1px 1px 2px rgba(34, 34, 34, 0.5)' : '1px 1px 1px rgb(226, 29, 29)' };

    @media (min-width: 1024px) {

        color: rgb(214, 25, 25);
        position: relative;
        text-shadow: 1px 1px 2px rgba(34, 34, 34, 0.5);

        &::after {
            bottom: -.2rem;
            content: '';
            background-color: #eee;
            height: .5px;
            left: 0;
            position: absolute;
            width: 100%;
        }

    }
`
export const SecondTitle = styled.h2`
    color: ${(props) => props.destaque ? 'rgb(214, 25, 25)' : '#fff9f9' };
    font-size: clamp(2rem, 1vw, 2.5rem);
    text-shadow: ${(props) => props.destaque ? 'rgba(34, 34, 34, 0.5)' : '1px 1px 1px rgb(226, 29, 29)' };

    @media (min-width: 1024px) {

        color: ${(props) => props.destaque ? 'rgb(214, 25, 25)' : '#fff9f9' };
        position: relative;
        text-shadow: 1px 1px 2px rgba(34, 34, 34, 0.5);

        &::after {
            bottom: -.2rem;
            content: '';
            background-color: #eee;
            height: .5px;
            left: 0;
            position: absolute;
            width: 100%;
        }

    }
`