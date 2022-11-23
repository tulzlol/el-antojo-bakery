import Item from "./Item";

const ItemList = ({ products }) => {
        return (
                <div className="row justify-content-around">
                {products.map((product) => <Item products={product} />)}
                </div>
        )
}

export default ItemList;