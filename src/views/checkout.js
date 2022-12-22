import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CartContext } from "../context/cartContext";
import { Card, Button } from "react-bootstrap";

// firebase
import {
    addDoc,
    collection,
    doc,
    getFirestore,
    updateDoc,
} from "firebase/firestore";

const CheckoutView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [updatingProducts, setUpdatingProducts] = useState(false);
    const { productsAdded: items, clear, totalAmount } = useContext(CartContext);
    const navigate = useNavigate();

    const getTotalByProduct = (quantity, price) => {
        return quantity * price;
    };

    const handleFinalizePurchase = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const phone = event.target[1].value;
        const email = event.target[2].value;

        setIsLoading(true);

        const total = items
            .map((product) =>
                getTotalByProduct(product.quantityAdded, product.item.price)
            )
            .reduce((previousValue, currentValue) => previousValue + currentValue);

        const order = {
            buyer: { name, phone, email },
            items,
            total,
        };
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order)
            .then(() => {
                setUpdatingProducts(true);
            })
            .catch((err) => console.error({ err }))
            .finally(() => { });
    };

    useEffect(() => {
        if (updatingProducts) {
            const db = getFirestore();

            items.forEach((element) => {
                const itemRef = doc(db, "items", element.item.id);
                const dataToUpdate = {
                    stock: element.item.stock - element.quantityAdded,
                };
                updateDoc(itemRef, dataToUpdate)
                    .then(() => {
                        clear();
                        setIsLoading(false);
                        alert("Compra finalizada");
                        navigate("/");
                    })
                    .catch((err) => console.error(err));
            });
        }
    }, [updatingProducts]);

    return (
        <Layout>
            <Card className="mt-5 text-center mx-auto" style={{ width: '38rem' }}>
                <Card.Body>
                    <Card.Title>
                        Ingrese sus datos para finalizar la compra:
                    </Card.Title>
                    <form onSubmit={handleFinalizePurchase} className="mt-4">
                        <div className="flex flex-col">
                            <input
                                className="mt-2"
                                placeholder="Nombre Completo"
                                required
                            />
                            <input
                                className="h-8 pl-4 mb-4 rounded-md"
                                placeholder="Numero de Telefono"
                                type="number"
                                required
                            />
                            <input
                                className="h-8 pl-4 mb-4 rounded-md"
                                placeholder="Email"
                                type={"email"}
                                required
                            />
                        </div>
                        <span>
                            Total a pagar: <strong>${totalAmount}</strong>
                        </span>
                        <div>

                            <Button
                                type="submit"
                                className="btn-primary mt-3 mb-2"
                                disabled={isLoading}
                            >
                                Finalizar
                            </Button>
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </Layout>
    );
};

export default CheckoutView;