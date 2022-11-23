import React from "react";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "./ItemList";

import { item } from "../mocks/item-mock";

const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        new Promise((resolve) =>
            setTimeout(() => {
                resolve(item);
            }, 1)
        ).then((data) => setProducts(data));
    }, [category]);
    if (products.length === 0) {
        return <p>Loading</p>
    }


    return (
        <Container className="container">
            <ItemList products={products}/>
        </Container>
    );
};

export default ItemListContainer;