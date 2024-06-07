import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
    justify-content: center;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    li {
        margin: 0;
        padding: 0;
    }
`

const Galeria = ({ fotos = [], aoFotoSelecionada}) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto => 
                            <li key={foto.id}>
                                <Imagem 
                                    aoZoomSolicitado={aoFotoSelecionada} 
                                    foto={foto} 
                                />
                            </li>
                        )}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    )
}

export default Galeria;