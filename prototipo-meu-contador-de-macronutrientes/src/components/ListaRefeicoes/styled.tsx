import styled from "styled-components";

export const ListaRefeicoesStyled = styled.ul`
    list-style: none;
    margin: 20px 0;
    background-color: white;
    padding: 20px 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 12px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    max-width: 768px;
    width: 100%;

    h2 {
        text-align: start;
    }
`