import { useState, useEffect } from 'react';

function Slideshow(props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(
            props.withArrows && (props.images?.length || 0) > 1
        );

    const slideshowStyle = {
        position: 'relative',
        overflow: 'hidden',
        width: `${props.width ? props.width + 'vh': '100%'}`,
        height: `${props.height ? props.height + 'vh': '100%'}`
    };

    const imageStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: props.contain ? 'contain': 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        transition: 'opacity 1s ease-in-out',
        opacity: 0,
    };

    const activeImageStyle = {
        ...imageStyle,
        opacity: 1,
    };

    const overlayStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '48px',
    };

    const arrowStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '2rem',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        border: 'none',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        zIndex: 20,
    };

    const leftArrowStyle = {
        ...arrowStyle,
        left: '10px',
    };

    const rightArrowStyle = {
        ...arrowStyle,
        right: '10px',
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + props.images.length) % props.images.length
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % props.images.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, props.time);

        return () => clearInterval(interval);
    }, [props.images.length, props.time]);

    return (
        <div style={slideshowStyle}>
            {props.images.map((image, index) => (
                <div
                    key={index}
                    style={{
                        ...(index === currentIndex
                            ? activeImageStyle
                            : imageStyle),
                        backgroundImage: `url(${image.url})`,
                    }}
                />
            ))}
            {showArrows &&
                <>
                    <button style={leftArrowStyle} onClick={goToPrevious}>
                        ‹
                    </button>
                    <button style={rightArrowStyle} onClick={goToNext}>
                        ›
                    </button>
                </>
            }
            <div style={overlayStyle}>
                {props.overlay && props.overlay}
            </div>
        </div>
    );
}

export default Slideshow;
