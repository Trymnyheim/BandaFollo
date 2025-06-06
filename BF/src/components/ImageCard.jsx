import Card from 'react-bootstrap/Card';

function ImageCard(props) {
  return (
    <Card className = "image-card" >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;