import "./Carousel.css";
import { useEffect, useState } from "react";
import Black from "../../assets/images/NexoImageCafe.png";
import Orange from "../../assets/images/NexoImageBurger.png";
import Generic from "../../assets/images/NexoImageDrink.png";
function Carousel() {
    const images = [Black, Orange, Generic];
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = () => {
            const imagePromises = images.map((src) => {
                const image = new Image();
                image.src = src;
                return new Promise((resolve) => {
                    image.onload = resolve;
                });
            });

            Promise.all(imagePromises).then(() => {
                setLoaded(true);
            });
        };

        preloadImages();
    }, [images]);

    function Move(offset) {
        const slides = document.querySelector("[data-carousel]").querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-activo]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.activo = true;
        delete activeSlide.dataset.activo;
    }

    useEffect(() => {
        if (loaded) {
            const intervalId = setInterval(() => {
                Move(1);
            }, 8000);

            return () => clearInterval(intervalId);
        }
    }, [loaded]);

    return (
        <>
            <div data-carousel className="carousel">
                <ul className="Certifications-card" data-slides id="data-slides">
                    {images.map((src, index) => (
                        <li
                            key={index}
                            className={`card-item ${index === 0 ? "activo" : ""}`}
                            data-activo={index === 0 ? "true" : undefined}
                        >
                            <img src={src} alt="" />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Carousel;
