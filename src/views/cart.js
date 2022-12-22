import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "../components/Item";
import { Layout } from "../components/Layout";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import { Button, Card } from "react-bootstrap";
import { Icon } from "../components/Icon"

const CartView = () => {
    const navigate = useNavigate();
    const { productsAdded: items, totalAmount } = useContext(CartContext);
    const goToCheckout = () => {
        navigate("/checkout");
    };

    return (
        <Layout>
            <div className="d-flex justify-content-center">
                {items.length === 0 ? (
                    <div className="mt-5 text-center justify-center">
                        <svg> {Icon("cart")} </svg>
                        <div className="mt-4">
                            <h2 mt-5>No has agregado ningun producto.</h2>
                        </div>
                        <Button
                            onClick={() => navigate("/")}
                            className="rounded-lg p-2 btn-dark mt-4"
                        >
                            Ir al Inicio
                        </Button>
                    </div>
                ) : (
                    <div>
                        <div className="d-flex row">
                            {items.map((product) => {
                                const quantityAdded = product.quantityAdded;
                                return (
                                    <section className="text-center">
                                        <div>
                                            <Item
                                                key={product.item.id}
                                                products={product.item}
                                                quantityAdded={quantityAdded}
                                            />
                                        </div>
                                        <div>
                                            <TrashWidget itemId={product.item.id} />
                                        </div>
                                    </section>
                                );
                            })}
                        </div>
                        <div className="text-center">
                            <div className="mb-2">
                                <span>
                                    Total a pagar: <strong>${totalAmount}</strong>
                                </span>
                            </div>
                            <Button onClick={goToCheckout} >
                                Ir al Checkout
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default CartView;