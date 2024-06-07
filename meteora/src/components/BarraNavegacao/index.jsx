import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Cart4 } from 'react-bootstrap-icons';
import SideCart from '../SideCart';
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext';

const RouterDomLinksStyled = styled.div`
    display: flex;
    flex-direction: column;
    a {
        text-decoration: none;
        color: white;
    }

    a:hover {
        color: #DAFF01;
    }

    @media (min-width: 768px){
        flex-direction: row;
        gap: 16px;
        margin-left: 16px;

        .home-link{
            display: none;
        }
    }
`

const SearchContainerStyled = styled.div`
    flex-grow: 1;
    background-color: white;
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 10px 0;
    margin-top: 5px;

    input {
        height: 38px;
        background-color: white;
        outline: none;
        color: black;
        padding-left: 8px;
    }

    @media (min-width: 768px){
        background-color: transparent;

        input {
            border: none;
        }
    }
`

const IconContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    .span-container {
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        span {
            color: #DAFF01;
            font-size: 20px;
        }
    }

    .hidden {
        display: none;
    }
`

const BarraNavegacao = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        const redimensionar = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', redimensionar)
        return () => { window.removeEventListener('resize', redimensionar) }
    }, [])

    const isMobile = windowSize < 768;

    const[sideCart, setSideCart] = useState(false)

    function toggleSideCart(sideCart) {
        setSideCart(!sideCart)
    }

    const {quantidade} = useCarrinhoContext();

    return (
        <Navbar className="pb-0" expand="md" bg='dark' data-bs-theme='dark'>
            <Container fluid className='ps-2 pe-2'>
                <Link to="/"><img src="./src/assets/logo-meteora.png" alt="Logo da marca Meteora" /></Link>
                <IconContainerStyled>
                    <div className={`span-container ${!isMobile && "hidden"}`}>
                        <Cart4 color={isMobile ? 'white' : ''} size={30} onClick={() => toggleSideCart(sideCart)}/>
                        <span>{quantidade}</span>
                    </div>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                </IconContainerStyled>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <RouterDomLinksStyled>
                            <Link className="home-link" to="/">Home</Link>
                            <Link to="/carrinho">Carrinho</Link>
                            <Link to="*">Novidades</Link>
                            <Link to="*">Promoções</Link>
                        </RouterDomLinksStyled>
                    </Nav>
                </Navbar.Collapse>

            </Container>
            <SearchContainerStyled>
                <input type='text' placeholder='Digite seu produto' />
                <Button className="rounded-0 me-4" variant={isMobile ? 'outline-dark' : 'outline-light'}>Buscar</Button>
            </SearchContainerStyled>
            <IconContainerStyled>
                <div className={`span-container ${isMobile ? "hidden" : ""}`}>
                    <Cart4 color={isMobile ? '' : 'white'} size={50} onClick={() => toggleSideCart(sideCart)}/>
                    <span>{quantidade}</span>
                </div>
            </IconContainerStyled>
            {sideCart ? <SideCart state={sideCart} toggle={toggleSideCart}/> : <></>}
        </Navbar>

    )
}

export default BarraNavegacao