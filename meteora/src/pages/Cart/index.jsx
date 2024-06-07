import styled from "styled-components";
import PurchaseDetails from "../../components/PurchaseDetails";
import ShoppingSummary from "../../components/ShoppingSummary";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartStyled = styled.main`
    .banner-img {
        width: 100%;
    }

    .cart-title {
        display: none;
    }

    .cart-buttons-container {
        display: flex;
        flex-direction: column;
        padding: 24px;
        gap:24px;
    }

    .link-home {
        text-decoration: none;
        color: #9353FF;
    }

    @media (min-width: 768px) {
        .cart-container{
            padding: 0 39px;
        }

        .cart-title {
            display: block;
            padding: 24px 0;
            font-size: 32px;
            text-align: center;
        }

        .cart-buttons-container {
            padding: 24px 0;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    @media (min-width: 1440px) {
        .cart-container {
            display: flex;
            margin-bottom: 32px;
            padding: 0 165px;
            justify-content: space-between;
        }
    }
`

const Cart = () => {
    return (
        <CartStyled>
            <img src="./src/assets/Mobile/banner4-mobile.png" className="banner-img" />
            <h2 className="cart-title">Carrinho de compras</h2>
            <div className="cart-container">
                <PurchaseDetails />
                <div className="cart-right-container">
                    <ShoppingSummary />
                    <div className="cart-buttons-container">
                        <Button
                            className="rounded-0"
                            style={{ background: "transparent", color: "#9353FF", border: "2px solid", fontWeight: "500" }}
                            variant="primary">
                            <Link to="/" className="link-home">Continuar comprando</Link>
                        </Button>
                        <Button className="rounded-0" style={{ backgroundColor: "#9353FF", border: "2px solid" }} variant="primary">Finalizar compra</Button>
                    </div>
                </div>
            </div>
        </CartStyled>
    )
}

export default Cart;