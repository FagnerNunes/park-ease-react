import styled from "styled-components";

export const ContainerPainel = styled.main`
    background-color: rgb(255, 253, 253);
    display: ${(props) => props.displaydesktop ? props.displaydesktop : 'block'};
    height: 100svh;
    font-family: 'Poppins', sans-serif;
    width: 100vw;
`

export const ContainerConteudo = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: auto;
    padding: 2rem;
    width: 100%;
`