import styled from "styled-components";

export const AlimentoLIStyled = styled.li`
    border-top: 1px solid rgba(0,0,0, 0.2);
    padding: 8px 4px;
    background-color: var(--principal-color);
    position: relative;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    header {
        display: flex;
        gap: 10px;
        justify-content: start;
        align-items: center;
        
        h4 {
            font-weight: 400;
            font-size: 18px;
        }

        input {
            width: 45px;
            border: none;
            font-size: 16px;
            border: 1px solid;
            border-radius: 4px;
            background-color: var(--secondary-color);
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0; /* Remover margens padrão */
        }
    }

`

export const IconContainerStyled = styled.div`
    position: absolute;
    right: 3px;
    top: 3px;
    display: flex;
    gap: 10px;

    svg {
        cursor: pointer;
        transition: 0.2s ease;
    }

    svg:hover {
        color: white;
    }
`

export const AlimentoDataContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        gap: 15px;
    }
`