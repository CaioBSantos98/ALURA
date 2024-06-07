import styled from "styled-components";

const BotaoPadraoEstilizado = styled.button`
    background: transparent;
    border: 2px solid #C98CF1;
    border-radius: 10px;
    color: #FFF;
    font-size: 20px;
    line-height: 24px;
    padding: 14px 0;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
        border: none;
        padding: 16px 2px;
    }
`

const BotaoPadrao = ({ children }) => {
    return (
        <BotaoPadraoEstilizado>
            {children}
        </BotaoPadraoEstilizado>
    )
}

export default BotaoPadrao;