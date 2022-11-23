import { Card, Button } from "react-bootstrap";
import "./cards.css"

const ItemDetail = ({ item }) => {
    console.log({ item });
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto">
            <Card className="mt-5" style={{ width: '18rem' }}>
                <div className="overflow">
                <Card.Img className="mx-auto d-block" variant="top" src={item.image} alt="Imagen no definida" />
                </div>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                    <Button className="mt-2" variant="outline-secondary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetail;