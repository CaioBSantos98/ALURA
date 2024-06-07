import { Button } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import styled from "styled-components";
import CartProduct from "./CartProduct";
import { useCarrinhoContext } from "../../hooks/useCarrinhoContext";
import { Link } from "react-router-dom";

const SideCartStyled = styled.aside`
    background-color: #343A40;
    color: white;
    min-height: 100vh;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 10;
    overflow-y: auto;
    padding-bottom: 40px;

    header {
        display: flex;
        background-color: #9353FF;
        justify-content: space-between;
        align-items: center;
        height: 82px;
        padding: 0 10%;

        h3 {
            font-size: 16px;
            font-weight: 500;
            margin: 0;
        }
    }

    .products-container {
        padding: 0 10%;

        p {
            margin: 30px 0;
            font-size: 24px;
        }
    }

    .total-container {
        display: flex;
        color: #DAFF01;
        justify-content: space-between;
    }

    .link-home {
        text-decoration: none;
        color: white;
    }
`

const BackgroundOpacity = styled.div`
    background-color: rgba(0,0,0, 0.8);
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 9;
    overflow-y: auto;
`

const SideCart = ({ state, toggle }) => {

    const { cart, valorTotal } = useCarrinhoContext();

    return (
        <>
            <BackgroundOpacity onClick={() => toggle(state)}>

            </BackgroundOpacity>
            <SideCartStyled>
                <header>
                    <h3>Carrinho de Compras</h3>
                    <XLg size={16} style={{ cursor: "pointer" }} onClick={() => toggle(state)} />
                </header>

                <div className="products-container">
                    {cart.length > 0 ?
                        <>
                            {
                                cart.map(produto => <CartProduct key={produto.id} product={produto} />)
                            }
                            <div className="total-container">
                                <h4>Total</h4>
                                <h4>R$ {valorTotal}</h4>
                            </div>
                            <Button
                                variant="primary"
                                className="rounded-0"
                                style={{ backgroundColor: "#9353FF", border: "none", width: "100%" }}
                                onClick={() => toggle(state)}>
                                <Link to="carrinho" className="link-home">Finalizar compra</Link>
                            </Button>
                        </> :
                        <p>Não existem produtos no seu carrinho</p>
                    }
                </div>
            </SideCartStyled>
        </>
    )
}

export default SideCart;