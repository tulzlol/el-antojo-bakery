import { Card, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";
import Swal from "sweetalert2";


import "./cards.css"

const ItemDetail = ({ item }) => {
    const alertAdd = () => {
        Swal.fire({
            text: "Agregado al carrito con exito.",
            icon: "success",
            position: "bottom-end",
            timer: "1000",
            showCloseButton: false,
            backdrop: false,
            width: "13em",
            heightAuto: true,
            showConfirmButton: false,
        })
    }
    const { addItem, isInCart } = useContext(CartContext);
    const navigate = useNavigate();
    const [count, setCount] = useState(1);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const maxQuantity = currentStock;
    const img = (item.image);
    function handleCount(type) {
        if (type === "plus" && count < maxQuantity) setCount(count + 1);
        if (type === "minus" && count > 1) setCount(count - 1);
    }

    function handleAdd() {
        if (currentStock < count) alert("No hay suficiente stock de este producto");
        else {
            setCurrentStock(currentStock - count);
            addItem(item, count);
            alertAdd();
        }
    }

    function handleCheckout() {
        navigate("/cart");
    }

    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center">
            <Card className="mt-5" style={{ width: '18rem' }}>
                <div className="overflow">
                    <Card.Img className="mx-auto d-block" variant="top" src={img} alt={item.name} />
                </div>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Card.Text>
                        ${item.price}
                    </Card.Text>
                    <Card.Text>
                        {currentStock > 0 && (
                            <span>  En Stock:  {currentStock}</span>
                        )}
                    </Card.Text>

                    <div>
                        {currentStock > 0 ? (
                            <ItemCount count={count} handleCount={handleCount} />
                        ) : (
                            <span className="mt-2">Sin stock</span>
                        )}
                    </div>
                    <div>
                        <Button onClick={handleAdd} disabled={currentStock === 0} className="mt-2" variant="outline-secondary">Agregar al carrito</Button>
                        <Button disabled={!isInCart(item.id)}
                            onClick={handleCheckout} className="mt-2 btn-gray" variant="outline-secondary">Finalizar compra</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetail;