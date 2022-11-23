import { Card, Button } from "react-bootstrap";

const ItemDetail = ({ item }) => {
    return (
        <div className="row justify-content-center">
            <Card className="mt-5" style={{ width: '18rem' }}>
                <Card.Img className="mt-2 rounded mx-auto d-block" variant="top" src={item.image} alt="Imagen no definida" />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Button variant="primary">Ver detalles</Button>
                </Card.Body>
            </Card>
    </div>
    );
};

export default ItemDetail;