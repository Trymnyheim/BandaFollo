import { HashLink } from 'react-router-hash-link';

function scrollWithOffset(el) {
  const yOffset = -76; // height of navbar
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function Icons() {
    return (
        <div className="icons-banner">
            <div className="icons-component">
                <HashLink scroll={scrollWithOffset} to="/tjenester#hjemmebesok">
                    <img src="/src/assets/icon/home-white.png" className="icons-icon" />
                    <h3>Hjemmebesøk</h3>
                </HashLink>
            </div>
            <div className="icons-component">
                <HashLink scroll={scrollWithOffset} to="/tjenester#levering">
                    <img src="/src/assets/icon/delivery-white.png" className="icons-icon" />
                    <h3>Levering</h3>
                </HashLink>
            </div>
            <div className="icons-component">
                <HashLink scroll={scrollWithOffset} to="/tjenester#veiledning">
                    <img src="/src/assets/icon/advice-white.png" className="icons-icon" />
                    <h3>Råd og veiledning</h3>
                </HashLink>
            </div>
        </div>
    );
}



export default Icons;