import styled from "styled-components"
import CartProduct from "../SideCart/CartProduct";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";

const PurchaseDetailsStyled = styled.div`
    background-color: black;
    color: white;
    padding: 24px 32px;
`

const PurchaseDetails = () => {
    const { cart } = useCarrinhoContext();
    return (
        <PurchaseDetailsStyled>
            <h2>Detalhes da compra</h2>
            {cart.map(product => <CartProduct key={product.id} product={product}/>)}
        </PurchaseDetailsStyled>
    )
}

export default PurchaseDetails;