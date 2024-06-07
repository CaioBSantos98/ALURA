import { Trash3Fill } from "react-bootstrap-icons";
import styled from "styled-components";
import Amount from "../../Amount";
import { useCarrinhoContext } from "../../../hooks/useCarrinhoContext";

const CartProductStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #6C757D;
    margin-bottom: 20px;
    padding: 20px 0;

    .left-container {
        display: flex;
    }

    img {
        width: 40%;
    }

    .products-info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 13px;
        margin-left: 16px;

        h3 {
            font-size: 16px;
            font-weight: 700;
            margin: 0;
        }

        p {
            color: #DAFF01;
            font-weight: 700;
            margin: 0;
        }
    }

    .amount-container {
        display: flex;
        gap: 10px;
    }
`

const CartProduct = ({ product }) => {
    const { removeTypeProduct } = useCarrinhoContext();

    return (
        <CartProductStyled>
            <div className="left-container">
                <img src={product.url} />
                <div className="products-info-container">
                    <h3>{product.name}</h3>
                    <div className="amount-container">
                        <span>Quantidade: </span>
                        <Amount quantity={product.quantidade} product={product} />
                    </div>
                    <p>R$ {product.price}</p>
                </div>
            </div>
            <Trash3Fill size={28} style={{ cursor: "pointer" }} onClick={() => removeTypeProduct(product.id)} />
        </CartProductStyled>
    )
}

export default CartProduct;