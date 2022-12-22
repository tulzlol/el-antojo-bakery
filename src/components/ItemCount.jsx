import { Button } from "react-bootstrap";

export const ItemCount = ({ count, handleCount }) => {
    return (
        <div className="flex text-center mt-2 mb-2">
            <Button
                onClick={() => handleCount("minus")}
                className="btn-dark"
            >
                -
            </Button>
            <span
                id="counter"
                className="flex mx-4"
            >
                {count}
            </span>
            <Button
                onClick={() => handleCount("plus")}
                className="btn-dark"
            >
                +
            </Button>
        </div>
    );
};