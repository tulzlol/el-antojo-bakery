import { Card, Button } from "react-bootstrap";

const Item = ({ products }) => {
    return (
                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img className="mt-2 rounded mx-auto d-block" variant="top" src={products.image} alt="Imagen no definida" />
                    <Card.Body>
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>
                            {products.description}
                        </Card.Text>
                        <Button variant="primary">Ver detalles</Button>
                    </Card.Body>
                </Card>
    )
}

export default Item;

