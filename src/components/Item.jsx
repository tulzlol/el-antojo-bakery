import { useNavigate, Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { Loading } from "./Loading";
import { TrashWidget } from "./TrashWidget";


export const Item = ({ products, quantityAdded, trash=false }) => {

    const navigate = useNavigate();


    function handleNavigate() {
        navigate(`/item/${products.id}`);
    }

    if (!products.image) {
        return <Loading />;
    }

    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <Card className="mt-5" style={{ width: '18rem' }}>
                <div className="overflow">

                    {<Card.Img className="mx-auto d-block" variant="top" src={products.image} alt="Imagen no definida" />}
                </div>
                <Card.Body>
                    <Card.Title>{products.name}</Card.Title>
                    <Card.Text>
                        {products.description.length > 20
                            ? `${products.description} ...`
                            : products.description}
                    </Card.Text>
                    <Card.Text>
                        <span className="font-bold mt-2">Precio: ${products.price}</span>
                    </Card.Text>
                    <Card.Text>
                        <span
                            className={products.stock === 0 ? "text-xs text-red-500 mt-1" : "text-xs mt-1"}
                            >
                            {products.stock === 0
                                ? "Sin Stock"
                                : quantityAdded
                                ? `Agregados: ${quantityAdded}`
                                : `En Stock: ${products.stock}`}
                        </span>
                    </Card.Text>
                    <Link to={"/item/" + products.id}>
                        <Button onClick={handleNavigate}  className="mt-2" variant="outline-secondary">Ver detalles</Button>
                    </Link>
                    {trash && <TrashWidget className="text-center" itemId={products.id} />}
                </Card.Body>
            </Card>
        </div>
    )
};
