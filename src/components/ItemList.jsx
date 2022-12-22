import { Item } from "./Item";

export const ItemList = ({ products }) => {
        return (
                <ul className="row text-center justify-content-center">
                {products.map((product) => (<Item key={product.id} products={product} />))}
                </ul>
        )
};
