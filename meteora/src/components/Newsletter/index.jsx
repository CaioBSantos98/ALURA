import { Button } from "react-bootstrap";
import styled from "styled-components";

const NewsletterStyled = styled.section`
    text-align: center;
    padding: 28.5px 26.5px;

    .newsletter-container{
        border: 1px solid black;
        padding: 24px 0;
        max-width: 729px;

        h4 {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 24px;
            padding: 0 20px;
        }

        .newsletter-input-container{
            display: flex;
            justify-content: center;

            input {
                height: 38px;
                outline: none;
                padding-left: 15px;
            }


        }
    }
`

const Newsletter = () => {
    return (
        <NewsletterStyled>
            <div className="newsletter-container">
                <h4>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</h4>
                <div className="newsletter-input-container">
                    <input type="email" placeholder="Digite seu email" />
                    <Button
                        style={{ backgroundColor: "#9353FF", border: "none" }}
                        className="rounded-0"
                        variant="primary">
                        Enviar
                    </Button>
                </div>
            </div>
        </NewsletterStyled>
    )
}

export default Newsletter;