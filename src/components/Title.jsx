
function Title({text}) {

    const titleStyle = {
        display: "flex",
        alignItems: "center",
        gap: '12px',
        padding: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "solid 2px white",
        borderRadius: "6px",
        marginTop: "96px"
    }

    const logoStyle = {
        height: '50px'
    }    
    
    return (
        <div style={titleStyle}>
            <img style={logoStyle} src="/images/logo/bandafollo_man.svg"/>
            <h3>
                {text.map((text, index) => (
                    <span key={index}>{text}<br/></span>
            ))}
            </h3>
        </div>
    )
}

export default Title;