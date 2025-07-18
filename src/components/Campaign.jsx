function Campaign({campaign}) {

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
            <img src={campaign.img} style={imageStyle} />
            <div style={textStyle}>
                <h2>{campaign.title}</h2>
                <p>{campaign.text}</p>
                <p className="bold">{campaign.disclaimer}</p>
            </div>
        </div>
    )
}

export default Campaign;