import styled from "styled-components";

export const BotaoPadraoStyled = styled.button`
    border: none;
    background-color: var(--secondary-color);
    width: 200px;
    border-radius: 20px;
    padding: 10px 20px;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    border: 2px solid black;
    transition: 0.2s ease;

    &:hover {
        background-color: #000000;
        color: white;
    }
`