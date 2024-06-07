import { ArrowRepeat, Flower1, XDiamond } from "react-bootstrap-icons";
import styled from "styled-components";

const FacilitiesStyled = styled.section`
    background-color: black;
    color: white;
    width: 100%;
    text-align: center;
    margin-top: 40px;
    padding: 32px 30.5px;

    h2 {
        margin-bottom: 32px;
    }

    .facilities-container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        text-align: start;
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        .facilities-container {
            max-width: 308px;
            text-align: start;
        }
    }
    
`

const EaseItemStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;

    .text-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;

        h3 {
            margin: 0;
            color: #DAFF01;
            font-size: 16px;
        }

        p {
            margin: 0;
            font-size: 13px;
        }
    }  
`

const Facilities = () => {
    return (
        <FacilitiesStyled>
            <h2>Conheça todas as nossas facilidades</h2>
            <div className="facilities-container">
                <EaseItemStyled>
                    <XDiamond size={56} color="#DAFF01" />
                    <div className="text-container">
                        <h3>PAGUE PELO PIX</h3>
                        <p>Ganhe 5% OFF em pagamentos via PIX</p>
                    </div>
                </EaseItemStyled>
                <EaseItemStyled>
                    <ArrowRepeat size={56} color="#DAFF01" />
                    <div className="text-container">
                        <h3>TROCA GRÁTIS</h3>
                        <p>Fique livre para trocar em até 30 dias.</p>
                    </div>
                </EaseItemStyled>
                <EaseItemStyled>
                    <Flower1 size={56} color="#DAFF01" />
                    <div className="text-container">
                        <h3>SUSTENTABILIDADE</h3>
                        <p>Moda responsável, que respeita o meio ambiente.</p>
                    </div>
                </EaseItemStyled>
            </div>
        </FacilitiesStyled>
    )
}

export default Facilities;