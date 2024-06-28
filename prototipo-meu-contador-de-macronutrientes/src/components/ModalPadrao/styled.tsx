import styled from "styled-components";

export const ModalPadraoStyled = styled.div`
    background-color: rgba(0,0,0, 0.3);
    min-height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalInternoStyled = styled.div`
    background-color: var(--secondary-color);
    z-index: 11;
    padding: 20px;
    border-radius: 20px;
    position: relative;

    svg {
        position: absolute;
        top: 8px;
        right: 8px;
        transition: 0.2s ease;
    }

    svg:hover {
        color: white;
        transition: 0.2s ease;
    }
`