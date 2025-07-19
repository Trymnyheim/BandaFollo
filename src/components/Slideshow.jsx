import { useState, useEffect } from 'react';
import './components.css';

function Slideshow(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showArrows] = useState(
        props.withArrows && (props.images?.length || 0) > 1
    )

    const slideshowSize = {
        width: props.width ? props.width + 'vh' : '100%',
        height: props.height ? props.height + 'vh' : '100%',
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + props.images.length) % props.images.length
        )
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % props.images.length
        )
    }

    useEffect(() => {
        if (!props.time) return;

        const interval = setInterval(() => {
            goToNext();
        }, props.time);

        return () => clearInterval(interval);
    }, [props.images.length, props.time])

    return (
        <div className="slideshow" style={slideshowSize}>
            {props.images.map((image, index) => (
                <div
                    key={index}
                    className={
                        `slideshow-image 
                        ${index === currentIndex ? 'active' : ''} 
                        ${props.contain ? 'contain' : 'cover'}`
                    }
                    style={{ backgroundImage: `url(${image.url})` }}
                />
            ))}
            {showArrows && (
                <>
                    <button className="slideshow-arrow left" onClick={goToPrevious}>
                        ‹
                    </button>
                    <button className="slideshow-arrow right" onClick={goToNext}>
                        ›
                    </button>
                </>
            )}
            {props.overlay && (
                <div className="slideshow-overlay">{props.overlay}</div>
            )}
        </div>
    )
}

export default Slideshow;