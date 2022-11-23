import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Container } from "react-bootstrap";

import { items } from "../mocks/item-mock";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    useEffect(() => {
        if (!id) return console.log("error");
        new Promise((resolve) =>
            setTimeout(() => {
                resolve(items.find(
                    (product) => product.id === id));
            }, 1)
        ).then((data) => {
            if (data) {
                setItem(data);
            } else {
                return (console.error("error"));
            }
        });
    }, [id]);


    return (
        <Container className="container-fluid d-flex text-center">
            <ItemDetail item={item} />
        </Container>
    );
};

export default ItemDetailContainer;