import { DashCircle, PlusCircle } from "react-bootstrap-icons"
import styled from "styled-components"
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext"

const AmountStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    span {
        margin: 0;
        padding: 0 12px;
        border: 1px solid;
        border-radius: 5px;
        text-align: center;
    }
`

const Amount = ({quantity, product}) => {
    const { addToCart, removeProductOfCart } = useCarrinhoContext();

    return (
        <AmountStyled>
            <DashCircle size={20} style={{cursor: "pointer"}} onClick={() => removeProductOfCart(product.id)}/>
            <span>{quantity ? quantity : 0}</span>
            <PlusCircle size={20} style={{cursor: "pointer"}} onClick={() => addToCart(product)}/>
        </AmountStyled>
    )
}

export default Amount;