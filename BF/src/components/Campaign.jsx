function Campaign({campaign}) {

    const campaignContainer = {
        display: "flex",
        flexWrap: "wrap",
        width: "100%"
    }

    const imageStyle = {
        maxWidth: "600px",
        width: "100%"
    }

    return(
        <div className="light" style={campaignContainer}>
            <img src={campaign.img} style={imageStyle} />
            <div>
                <h2>{campaign.title}</h2>
                <p>{campaign.text}</p>
                <p className="bold">{campaign.disclaimer}</p>
            </div>
        </div>
    )
}

export default Campaign;