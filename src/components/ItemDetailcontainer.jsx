import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { Container } from "react-bootstrap";

import { items as itemMock } from "../mocks/item-mock";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        new Promise((resolve) => setTimeout(() => resolve(itemMock[0]), 50)).then(
            (data) => setItem(data)
        );
    }, []);

    if (!item) {
        return <p>Loading...</p>;
    }

    return (<Container>
                <ItemDetail item={item}/>
            </Container>) ;
};

export default ItemDetailContainer;