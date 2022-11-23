import Item from "./Item";

const ItemList = ({ products }) => {
        return (
                <div className="row text-center justify-content-md-center">
                {products.map((product) => <Item products={product} />)}
                </div>
        )
}

export default ItemList;