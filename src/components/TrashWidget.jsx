import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Icon } from "./Icon";
import { Button } from "react-bootstrap";

export const TrashWidget = ({ itemId }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="mt-4 mb-4">
        <Button className="text-center btn-danger" onClick={() => removeItem(itemId)} >
            Eliminar del carrito <span>{Icon("trash")}</span>
        </Button>
        </div>
    );
};