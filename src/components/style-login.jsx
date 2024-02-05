import styled from "styled-components";

export const ContainerGeral = styled.div`
    background-color: #fff9f9;
    display: grid;
    height: 100vh;
    place-items: center;
    width: 100%;
`

export const ContainerLogin = styled.div`
    align-items: center;
    border-radius: .5rem;
    display: flex;
    height: 100%;
    justify-content: center;
    position: relative;
    width: 100%;

    .container-img {
        background-image: url(${(props) => props.bglogin || ''});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 100%;
        position: absolute;
        width: 100%;
    }

    form.container-form {
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

        h1 {
            color: #fff9f9;
            font-size: clamp(2rem, 6vw, 2.5rem);
            text-shadow: 1px 1px 1px rgb(226, 29, 29);
        }

        fieldset {
            border: none;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;

            input, button {
                border: 1px solid transparent;
                padding: .5rem;
                transition: .3s;
            }

            input {
                &:active {
                    box-shadow: 0 1px 3px .5px rgb(226, 29, 29);
                    transition: .3s;
                }
            }
            
            button {
                background-color: rgb(226, 29, 29);
                border: none;
                box-shadow: 0 1px 3px .5px rgba(0, 0, 0, .2);
                color: white;
                cursor: pointer;
                font-weight: 500;
                letter-spacing: .5px;
                padding: .5rem;

                &:active {
                    background-color: rgba(223, 41, 41, .8);
                    box-shadow: 0 0 10px .1px rgba(255, 255, 255, 0.5);
                    color: #fff;
                }
            }

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

        form.container-form {
            
            h1 {
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

            fieldset {
                gap: 1.5rem;
                max-width: 400px;

                input, button {
                    box-shadow: 0 0 5px .1px rgba(0, 0, 0, .1);
                }
            
                input {
                    &:hover, &:focus {
                        box-shadow: 0 1px 3px .3px rgba(226, 29, 29, .5);
                        transition: .3s;
                    }
                }

                button {
                    &:hover {
                        background-color: rgb(187, 29, 29);
                        box-shadow: 0 0 10px .1px rgba(255, 255, 255, 0.5);
                        color: #fff;
                        transition: all.3s;
                    }
                }
            }

            .opcoes {
                gap: 2rem;
            }

    }
}
`

