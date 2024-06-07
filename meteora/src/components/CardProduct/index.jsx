import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext';

const CardProduct = ({ product }) => {
  const { addToCart } = useCarrinhoContext();

  return (
    <Card className="rounded-0" style={{ maxWidth: "390px" }}>
      <Card.Img variant="top" src={product.url} className='rounded-0' />
      <Card.Body>
        <Card.Title style={{ fontSize: "16px", fontWeight: "bold" }}>{product.name}</Card.Title>
        <Card.Text style={{ fontSize: "13px" }}>
          {product.description}
        </Card.Text>
        <Card.Text style={{ fontWeight: "bold" }}>R$ {product.price}</Card.Text >
        <Button
          className="rounded-0"
          variant="primary"
          style={{ backgroundColor: "#9353FF", border: "none" }}
          onClick={() => addToCart(product)}>
          Adicionar ao carrinho
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;