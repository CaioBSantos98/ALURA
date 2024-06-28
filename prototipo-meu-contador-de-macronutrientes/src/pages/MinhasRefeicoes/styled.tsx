import styled from "styled-components";

export const MinhasRefeicoesContainerStyled = styled.section`
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        text-align: center;
    }
`

export const ButtonContainerStyled = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`