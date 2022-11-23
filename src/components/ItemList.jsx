import { Card, Button } from "react-bootstrap";

const ItemList = ({ products }) => {
    return (
        <div className="row justify-content-around">
        {products.map((product) =>
            <Card className="mt-5" style={{ width: '18rem' }}>
                <Card.Img className="mt-2 rounded mx-auto d-block" variant="top" src={product.image} alt="Imagen no definida" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    <Button variant="primary">Ver detalles</Button>
                </Card.Body>
            </Card>
        )}
    </div>
    );
};

export default ItemList;