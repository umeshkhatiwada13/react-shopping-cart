import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems, subTotal, tax, shipping, total } = useSelector((state) => state.cart);
    const increment = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id },
        });
        dispatch({ type: "calculateTotal" });
    };
    const decrement = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        });
        dispatch({ type: "calculateTotal" });
    };
    const deleteFromCart = (id) => {
        dispatch({
            type: "deleteFromCart",
            payload: id,
        });
        dispatch({ type: "calculateTotal" });
    }

    return (
        <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map((i) => (
                            < CartItem
                                qty={i.quantity}
                                name={i.name}
                                key={i.id}
                                id={i.id}
                                price={i.price}
                                imgSrc={i.imgSrc}
                                increment={increment}
                                decrement={decrement}
                                deleteHandler={deleteFromCart}

                            />
                        ))
                    ) : <h1>No Items found</h1>
                }
            </main>
            <aside>
                <h2>Subtotal: ${subTotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
            </aside>
        </div>
    )
};

const CartItem = ({
    imgSrc,
    name,
    price,
    qty,
    decrement,
    increment,
    deleteHandler,
    id,
}) => (
    <div className="cartItem">
        <img src={imgSrc} alt="item" />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>
        <div>
            <button onClick={() => decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => increment(id)}>+</button>
        </div>

        <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
)

export default Cart;