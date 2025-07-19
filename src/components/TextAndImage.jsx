
function TextAndImage({ id, title, text, image, left }) {
    return (
        <div id={id} className={`text-and-image ${left ? 'left' : 'right'}`}>
            <div className="text-and-image-text">
                <h1 className="center">{title}</h1>
                {text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <img src={image} />
        </div>
    );
}

export default TextAndImage;