import styled from "styled-components"
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext"

const ShoppingSummaryStyled = styled.div`
    margin-top: 24px;
    background-color: black;
    color: white;
    padding: 32px;

    .summary-products-container {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        padding-top: 32px;
    }

    .summary-total-container {
        display: flex;
        justify-content: space-between;
        color: #DAFF01;
        font-size: 24px;
        font-weight: 500;
        border-top: 1px solid;
        padding-top: 20px;
    }

    @media (min-width: 1440px) {
        margin: 0;
    }
`

const ShoppingSummary = () => {
    const { quantidade , valorTotal } = useCarrinhoContext();

    return (
        <ShoppingSummaryStyled>
            <h2>Sumário</h2>
            <div className="summary-products-container">
                <p>{quantidade} Produtos</p>
                <p>R$ {valorTotal}</p>
            </div>
            <div className="summary-total-container">
                <p>Total:</p>
                <p>R$ {valorTotal}</p>
            </div>
        </ShoppingSummaryStyled>
    )
}

export default ShoppingSummary;