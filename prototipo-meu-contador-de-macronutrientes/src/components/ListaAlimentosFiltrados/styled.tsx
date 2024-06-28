import styled from "styled-components";

export const ListaAlimentosFiltradosStyled = styled.ul`
    list-style: none;
    margin-top: 20px;
    overflow-y: auto;
    max-height: 200px;

    li {
        border-top: 1px solid rgba(0,0,0, 0.2);
        display: flex;
        padding: 5px 0;
        gap: 10px;

        input {
            cursor: pointer;
            width: 20px;
        }

        label {
            cursor: pointer;

            &:hover {
                font-weight: 700;
            }
        }
    }
`