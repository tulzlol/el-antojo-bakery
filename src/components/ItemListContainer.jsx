import React from "react";
import { Container, Button, Card } from "react-bootstrap";

const ItemListContainer = ({ title, greeting }) => {
    return (
        <Container>
            <Card className="mt-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" alt="Imagen no definida" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {greeting}
                    </Card.Text>
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ItemListContainer;