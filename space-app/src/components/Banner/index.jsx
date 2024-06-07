import styled from "styled-components";

const BannerEstilizado = styled.div`
    min-height: 328px;
    border-radius: 20px;
    background-image: url( ${props => props.$imagemDeFundo});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
`

const TituloEstilizado = styled.h1`
    color: #FFF;
    font-size: 40px;
    font-weight: 400;
    max-width: 301px;
    padding: 92px 64px;
`

const Banner = ({ children, imagemDeFundo }) => {

    return(
        <BannerEstilizado $imagemDeFundo={imagemDeFundo}>
            <TituloEstilizado>
                {children}
            </TituloEstilizado>
        </BannerEstilizado>
        
    )
}

export default Banner;