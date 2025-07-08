import Slideshow from '/src/components/Slideshow.jsx'

function Produkt({produkt}) {

    const containerStyle = {
        flex: '1 0 300px',
    }

    return(
        <>
            <div className="container">
                <div style={containerStyle}>
                    <h1>{produkt.title}</h1>
                    {produkt.about.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <ul>
                        {produkt.subProducts.map((subProduct, index) => (
                            <li key={index}>{subProduct}</li>
                        ))}
                    </ul>
                </div>
                <div style={{...containerStyle, minHeight: '500px'}}>
                    <Slideshow images={produkt.images} time={10000} withArrows={true} />
                </div>
            </div>
        </>
    )
}

export default Produkt;