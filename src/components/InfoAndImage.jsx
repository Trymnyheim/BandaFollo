
function InfoAndImage({ title, image, children, colored, center, 
    bordered }) {

    return (
        <div className={`container info-and-image 
            ${colored ? 'b-primary' : 'b-primary-light'} 
            ${center ? 'center' : ''} 
            ${bordered ? 'info-and-image-bordered' : ''}
        `}>
            <div className={`info-and-image-child${center ? "-center" : ""}`}>
                <h2>{title}</h2>
                {children}
            </div>
            {image && <img src={image} />}
        </div>
    )
}

export default InfoAndImage;