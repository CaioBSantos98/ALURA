import styled from "styled-components";
import BotaoFavorito from "./BotaoFavorito";
import BotaoExpandir from "./BotaoExpandir";

const FigureEstilizado = styled.figure`
    width: ${ props => props.$expandida ? "100%" : "460px"};
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    color: #FFF;
    margin: 0;
    
    img {
        width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        display: flex;
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        justify-content: space-between;
        align-items: flex-end;
    }
`

const TextContainerEstilizado = styled.div`
    margin: 0;
    padding: 16px 21px;

    h3 {
        font-size: 20px;
        line-height: 0px;
    }

    p {
        font-size: 16px;
        line-height: 0px;
    }
`

const ButtonContainerEstilizado = styled.div`
    display: flex;
    gap: 24px;
    padding-right: 16px;
    padding-bottom: 16px;
`


const Imagem = ({ foto, expandida = false, aoZoomSolicitado }) => {
    return (
        <FigureEstilizado $expandida={expandida}>
            <img src={foto.path} alt={`Foto de ${foto.titulo}`}/>
            <figcaption>
                <TextContainerEstilizado>
                    <h3>{foto.titulo}</h3>
                    <p>{foto.fonte}</p>
                </TextContainerEstilizado>
                <ButtonContainerEstilizado>
                    <BotaoFavorito></BotaoFavorito>
                    {!expandida && 
                        <BotaoExpandir 
                            onClick={() => aoZoomSolicitado(foto)}>
                        </BotaoExpandir>
                    }
                </ButtonContainerEstilizado>
            </figcaption>
        </FigureEstilizado>
    )
}

export default Imagem;