import styled from "styled-components";

export const RefeicaoContainerStyled = styled.div`

    background-color: var(--secondary-color);
    padding: 5px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div {
        display: flex;
        align-items: center
    }

    svg {
        transition: 0.2s ease;

        &:hover {
            color: white;
        }
    }
`