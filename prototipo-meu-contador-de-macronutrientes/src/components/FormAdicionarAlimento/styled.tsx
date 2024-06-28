import styled from "styled-components";

export const FormAdicionarAlimentoStyled = styled.form`
    display: flex;
    flex-direction: column;
    min-height: 350px;

    h3 {
        font-size: 24px;
        margin: 10px 0;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        input {
            font-size: 20px;
            padding: 5px;
        }

        button {
            font-size: 20px;
            padding: 5px;
            background-color: var(--principal-color);
            border: none;
            cursor: pointer;
            transition: 0.2s ease;

            &:hover {
                background-color: white;
            }
        }
    }
`