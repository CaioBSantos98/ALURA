import styled from "styled-components";
import CardCategorie from "../CardCategorie";
import categories from "./categories.json";

const CategoriesStyled = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin: 10px 0;
        width: 100%;
        text-align: center;
    }
    
    ul {
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-between;
        width: 100%;

        li {
            padding: 0;
            text-decoration: none;
            border: none;
            width: 40%;
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {
        ul {
            li {
                width: 30%;
            }

        }
    }
    
    @media (min-width: 1440px) {
        ul {
            li{
                width: 13%;
            }
        }
    }
`

const Categories = () => {
    return (
        <CategoriesStyled>
            <h2>Busque por categoria:</h2>
            <ul>
                {categories.map(categorie =>
                    <li key={categorie.id}>
                        <CardCategorie title={categorie.title} url={categorie.url}/>
                    </li>
                )}
            </ul>

        </CategoriesStyled>
    )
}

export default Categories;