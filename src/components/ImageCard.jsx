import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ImageCard({ image, title, text, buttons, imageBottom }) {

  return (
    <Card className="image-card">
      {image && <Card.Img variant="top" src={image} />}
      <Card.Body>
        <Card.Title className="bold mb-4">{title}</Card.Title>
        {!Array.isArray(text) && 
          <Card.Text>{text}</Card.Text>
        }
        {Array.isArray(text) && text.map((paragraph, index) => (
            <Card.Text key={index}>{paragraph}</Card.Text>
        ))}
        </Card.Body>
        <div className="container mt-auto mb-3">
          {buttons?.map((button, index) => (
            <Button key={index} variant="primary" onClick={button.action}>
              {button.text}
            </Button>
          ))}
        </div>
      {imageBottom && <Card.Img variant="bottom" src={imageBottom} />}
    </Card>
  );
}

export default ImageCard;
