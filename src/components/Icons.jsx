import { HashLink } from 'react-router-hash-link';
import useScrollWithOffset from '../utils/useScrollWithOffset.jsx';

function Icons() {

    const scrollWithOffset = useScrollWithOffset();

    return (
        <div className="icons-banner">
            <div className="icons-component">
                <HashLink scroll={scrollWithOffset} to="/tjenester#hjemmebesok">
                    <img src="/images/icon/home-white.png" className="icons-icon" />
                    <h3>Hjemmebesøk</h3>
                </HashLink>
            </div>
            <div className="icons-component">
                <HashLink scroll={scrollWithOffset} to="/tjenester#levering">
                    <img src="/images/icon/delivery-white.png" className="icons-icon" />
                    <h3>Levering</h3>
                </HashLink>
            </div>
            <div className="icons-component">
                <HashLink scroll={scrollWithOffset} to="/tjenester#veiledning">
                    <img src="/images/icon/advice-white.png" className="icons-icon" />
                    <h3>Råd og veiledning</h3>
                </HashLink>
            </div>
        </div>
    );
}



export default Icons;