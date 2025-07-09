import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ImageCard(props) {
  const { image, title, text, button } = props;

  return (
    <Card className="image-card">
      {image && <Card.Img variant="top" src={image} />}
      <Card.Body>
        <Card.Title className="bold">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        
        {button && (
          <Button variant="primary" onClick={button.action}>
            {button.text}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ImageCard;
