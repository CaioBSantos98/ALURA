import styled from "styled-components";
import ControlledCarousel from "../../components/Carousel";
import Categories from "../../components/Categories";
import Products from "../../components/Products";
import Facilities from "../../components/Facilities";
import Newsletter from "../../components/Newsletter";

const HomeStyled = styled.main`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
`

const HomeSection = styled.section`
    margin: 0 10%;
`

const Home = () => {
    return (
        <HomeStyled>
            <ControlledCarousel />
            <HomeSection>
                <Categories />
                <Products />
            </HomeSection>
            <Facilities />
            <Newsletter />
        </HomeStyled>
    )
}

export default Home;