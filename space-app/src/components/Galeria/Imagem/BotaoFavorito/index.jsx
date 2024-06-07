import styled from "styled-components";

const BotaoFavoritoEstilizado = styled.button`
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    background-image: url("../../../public/icones/favorito.png");
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
`

const BotaoFavorito = () => {
    return (
        <BotaoFavoritoEstilizado>
        </BotaoFavoritoEstilizado>
    )
}

export default BotaoFavorito;