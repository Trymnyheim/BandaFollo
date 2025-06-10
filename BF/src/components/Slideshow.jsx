import { useState, useEffect } from 'react';

function Slideshow(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideshowStyle = {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
    };

    const imageStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % props.images.length
            );
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [props.images.length]);

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
        </div>
    );
}

export default Slideshow;
