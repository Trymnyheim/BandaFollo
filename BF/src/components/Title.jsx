
function Title() {

    const titleStyle = {
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: "solid 2px white"
    }

    const logoStyle = {
        height: '50px'
    }

    return (
        <div style={titleStyle}>
            <img style={logoStyle} src="./src/assets/logo.png"/>
            <p>- Spesialforretning innen<br/>sykepleie- og helseartikler</p>
        </div>
    )
}

export default Title;