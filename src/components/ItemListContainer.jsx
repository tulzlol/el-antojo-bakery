import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import ItemList from "./ItemList";

import { items } from "../mocks/item-mock";

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        new Promise((resolve) =>
            setTimeout(() => {
                resolve(items);
            }, 50)
        ).then((data) => {
            if (category) {
                const categories = data.filter(
                    (product) => product.category === category);
                    setProducts(categories);
            } else {
                setProducts(data);
            }
        });
    }, [category]);



    return (
        <Container className="container">
        <ItemList products={products} />
        </Container>
    );
};

export default ItemListContainer;