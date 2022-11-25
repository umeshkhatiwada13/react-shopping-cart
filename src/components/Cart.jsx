import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';

const Cart = () => {
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <> <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (
                        cartItems.map(i => (
                            < CartItem name={i.name} key={i.id} price={i.price} imgSrc={i.imgSrc} />
                        ))
                    ) : <h1>No Items found</h1>
                }

                {/* <CartItem name={"Mac"} price={"200"} imgSrc={img1} /> */}
                {/* <CartItem name={"Shoe"} price={"200"} imgSrc={img2} /> */}
            </main>
            <aside>
                <h2>Subtotal: ${200}</h2>
                <h2>Shipping: ${200}</h2>
                <h2>Tax: ${200}</h2>
                <h2>Total: ${200}</h2>
            </aside>
        </div>
        </>
    )
};

const CartItem = ({ imgSrc, name, price, qty, decrement, increment, deleteHandler, id }) => (
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