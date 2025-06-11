import Card from 'react-bootstrap/Card';
import { HashLink } from 'react-router-hash-link';

function scrollWithOffset(el) {
    const yOffset = -76; // height of navbar
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

const style = {
  width: "20rem"
}

function NavCard(props) {
  return (
    <div style={style} >
      <HashLink scroll={scrollWithOffset} to={props.url} >
          <Card onClick={props.select}>
              <Card.Body>
                  <Card.Title>{props.title}</Card.Title>
                  <Card.Img variant="top" src={props.image} />
                  <Card.Text>
                  &rarr;
                  </Card.Text>
              </Card.Body>
          </Card>
      </HashLink>
    </div>
  );
}

export default NavCard;