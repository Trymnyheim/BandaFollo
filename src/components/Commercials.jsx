import { useCommercial } from '../utils/CommercialContext.jsx';
import Commercial from './Commercial.jsx';

function Commercials() {

    const { commercials } = useCommercial();

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
        <>
            {commercials.map((commercial, index) => (
                <Commercial key={index} commercial={commercial} />
            ))}

        </>
    )
}

export default Commercials;