import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCategorie({ title, url }) {
  return (
    <Card text="white" className="rounded-0 border-0" bg="black" >
      <Card.Img variant="top" src={url} />
      <Card.Body className='text-center'>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardCategorie;