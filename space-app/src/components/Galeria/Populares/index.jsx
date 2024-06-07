import styled from "styled-components";
import Titulo from "../../Titulo";
import fotosPopulares from "./fotos-populares.json";
import BotaoPadrao from "../../BotaoPadrao";

const PopularesEstilizado = styled.section`
    display: flex;
    flex-direction: column;
`

const ListaPopulares = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    img {
        border-radius: 20px;
        max-width: 212px;
    }
`

const Populares = () => {
    return (
        <PopularesEstilizado>
            <Titulo $alinhamento="center">Populares</Titulo>
            <ListaPopulares>
                {fotosPopulares.map(foto => 
                    <li key={foto.id}>
                        <img src={foto.path} alt="Imagem" />
                    </li>
                )}
            </ListaPopulares>
            <BotaoPadrao>
                Ver mais
            </BotaoPadrao>
        </PopularesEstilizado>
    )
}

export default Populares;