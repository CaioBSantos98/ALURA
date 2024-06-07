import styled from "styled-components"
import products from "./products.json";
import CardProduct from "../CardProduct";

const ProductsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        text-align: center;
        margin-bottom: 15px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        list-style: none;
        gap: 30px;
        justify-content: center;
        align-items: center;
    }

    li {
        padding: 0;
        max-width: 388px;
    }

    @media (min-width: 768px) {
        margin-top: 30px;
        ul {
            justify-content: space-between;
        }

        li {
            padding: 0;
            width: 40%;
        }
    }

    @media (min-width: 1440px) {
        margin-top: 50px;
        li {
            padding: 0;
            width: 30%;
        }
    }
`

const Products = () => {
    return (
        <ProductsStyled>
            <h2>Produtos que estão bombando!</h2>
            <ul>
                {products.map(product =>
                    <li key={product.id}>
                        <CardProduct product={product} />
                    </li>
                )}
            </ul>
        </ProductsStyled>
    )
}

export default Products;