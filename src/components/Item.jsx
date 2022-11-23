import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./cards.css"

const Item = ({ products }) => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 center-block">
                <Card className="mt-5" style={{ width: '18rem' }}>
                <div className="overflow">
                    <Card.Img className="mx-auto d-block" variant="top" src={products.image} alt="Imagen no definida" />
                </div>
                    <Card.Body>
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>
                            {products.description}
                        </Card.Text>
                        <Link to={"/item/"+products.id}>
                        <Button variant="outline-secondary">Ver detalles</Button>
                        </Link>
                    </Card.Body>
                </Card>
        </div>
    )
}

export default Item;

