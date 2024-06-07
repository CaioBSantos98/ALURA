import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ControlledCarousel = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        const redimensionar = () => {
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', redimensionar)
        return () => { window.removeEventListener('resize', redimensionar) }
    }, [])

    const isMobile = windowSize < 768;
    const isTablet = windowSize >= 768 && windowSize < 1024;
    const isDesktop = windowSize >= 1024;

    let CarouselImage1;
    let CarouselImage2;
    let CarouselImage3;

    if (isMobile) {
        CarouselImage1 = "./src/assets/Mobile/banner1-mobile.png";
        CarouselImage2 = "./src/assets/Mobile/banner2-mobile.png";
        CarouselImage3 = "./src/assets/Mobile/banner3-mobile.png";
    } else if (isTablet) {
        CarouselImage1 = "./src/assets/Tablet/banner1-tablet.png";
        CarouselImage2 = "./src/assets/Tablet/banner2-tablet.png";
        CarouselImage3 = "./src/assets/Tablet/banner3-tablet.png";
    } else if (isDesktop) {
        CarouselImage1 = "./src/assets/Desktop/banner1-desktop.png";
        CarouselImage2 = "./src/assets/Desktop/banner2-desktop.png";
        CarouselImage3 = "./src/assets/Desktop/banner3-desktop.png";
    }

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel style={{width: "100%"}} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item> 
                <img style={{width: "100%"}} src={CarouselImage1} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width: "100%"}} src={CarouselImage2} />
            </Carousel.Item>
            <Carousel.Item>
                <img style={{width: "100%"}} src={CarouselImage3} />
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;