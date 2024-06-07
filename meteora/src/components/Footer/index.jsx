import { CCircle } from "react-bootstrap-icons";
import styled from "styled-components";

const FooterStyled = styled.footer`
    background-color: black;
    text-align: center;
    color: white;

    p {
        padding: 17px 0;
        margin: 0;
    }
`

const Footer = () => {
    return (
        <FooterStyled>
            <p>
                2024 <CCircle/> Desenvolvido por Alura | Projeto fictício sem fins comerciais.
            </p>
        </FooterStyled>
    )
}

export default Footer;