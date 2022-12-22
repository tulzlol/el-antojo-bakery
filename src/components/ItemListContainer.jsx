import { Container } from "react-bootstrap";
import { useGetItem } from "../hooks/useGetItem";
import { ItemList } from "./ItemList"
import { Loading } from "./Loading";


const ItemListContainer = () => {
    const items = useGetItem();
    if (!items) {
        return <Loading />;
    }


return (
    <Container className="container-fluid d-flex justify-content-center text-center">
        <ItemList products={items} />
    </Container>
);
};

export default ItemListContainer;