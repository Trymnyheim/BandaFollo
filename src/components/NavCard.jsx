import { HashLink } from 'react-router-hash-link';
import useScrollWithOffset from '../utils/useScrollWithOffset';
import Arrow from './Arrow.jsx';
import Card from 'react-bootstrap/Card';

function NavCard({title, text, image, url, select}) {

    const scrollWithOffset = useScrollWithOffset();

    return (
        <div className="with-arrow" >
            <HashLink scroll={scrollWithOffset} to={url} >
                <Card className="nav-card" onClick={select}>
                    <Card.Body>
                        <Card.Title>
                            <span>{title}</span>
                            <Arrow />
                        </Card.Title>
                        <Card.Img src={image} />
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </HashLink>
        </div>
    )
}

export default NavCard;