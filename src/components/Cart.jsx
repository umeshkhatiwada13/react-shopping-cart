import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const increment = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id },
        })
    };
    const decrement = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        })
    };
    const deleteFromCart = (id) => {
        dispatch({
            type: "deleteFromCart",
            payload: id,
        })
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
                <h2>Subtotal: ${200}</h2>
                <h2>Shipping: ${200}</h2>
                <h2>Tax: ${200}</h2>
                <h2>Total: ${200}</h2>
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