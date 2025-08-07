
function Commercial({ commercial }) {
    
    const {title, text, disclaimer, image} = commercial;

    const campaignContainer = {
        display: "flex",
        flexWrap: "wrap",
        maxWidth: "500px",
        margin: "24px auto"
    }

    const imageStyle = {
        maxWidth: "550px",
        width: "100%"
    }

    const textStyle = {
        padding: "24px"
    }

    return(
        <div className="light" style={campaignContainer}>
            <img src={`https://api.bandafollo.no/uploads/commercial/${image}`} style={imageStyle} />
            <div style={textStyle}>
                <h2>{title}</h2>
                <p>{text}</p>
                <p className="bold">{disclaimer}</p>
            </div>
        </div>
    )
}

export default Commercial;