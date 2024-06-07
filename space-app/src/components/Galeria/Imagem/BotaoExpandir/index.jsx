import styled from "styled-components";

const BotaoExpandirEstilizado = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background: transparent;
    background-image: url("../../../public/icones/expandir.png");
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
`

const BotaoExpandir = ({ onClick }) => {
    return (
        <BotaoExpandirEstilizado onClick={onClick}>
        </BotaoExpandirEstilizado>
    )
}

export default BotaoExpandir;