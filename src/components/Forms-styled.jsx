import styled from "styled-components";

export const PrimaryForm = styled.form`

    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    gap: 2rem;
    justify-content: center;
    max-width: 600px;
    padding-inline: 1rem;
    width: 100%;
    z-index: 1;

    fieldset {
        border: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
    }

    @media (min-width: 1024px) {

        fieldset {
            gap: 1.5rem;
            max-width: 400px;
        }

    }


`