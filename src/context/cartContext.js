import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

function alertDel () {
    Swal.fire({
        text: "Eliminado del carrito con exito.",
        icon: "success",
        position: "bottom-end",
        timer: "1000",
        showCloseButton: false,
        backdrop: false,
        width: "13em",
        heightAuto: true,
        showConfirmButton: false,
        imageSize: "10x5",
    })
}

export const CartContext = createContext([]);
export const CartContextProvider = ({ children }) => {
    const [productsAdded, setProductsAdded] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const amount = productsAdded
            .map((product) => parseInt(product.item.price) * product.quantityAdded)
            .reduce((partialSum, a) => partialSum + a, 0);
        setTotalAmount(amount);
    }, [productsAdded]);

    function addItem(item, quantity) {
        const isAlreadyAdded = isInCart(item.id);
        if (isAlreadyAdded) {
            setProductsAdded((prevState) =>
                prevState.map((productAdded) =>
                    productAdded.item.id === item.id
                        ? {
                            ...productAdded,
                            quantityAdded: productAdded.quantityAdded + quantity,
                        }
                        : productAdded
                )
            );
        } else {
            setProductsAdded((prevState) =>
                prevState.concat({ item, quantityAdded: quantity })
            );
        }
    }

    function removeItem(itemId) {
        setProductsAdded((prevState) =>
            prevState.filter((product) => product.item.id !== itemId)
        )
        alertDel()
        ;
    }

    function clear() {
        setProductsAdded([]);
        setTotalAmount(0);
    }

    function isInCart(itemId) {
        return Boolean(productsAdded.find((product) => product.item.id === itemId));
    }

    return (
        <CartContext.Provider
            value={{
                addItem,
                removeItem,
                clear,
                isInCart,
                productsAdded,
                totalAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
