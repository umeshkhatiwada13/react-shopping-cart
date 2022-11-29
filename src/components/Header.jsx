import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch({
      type: "calculateTotal",
    })
  }
  const { cartItems } = useSelector(state => state.cart);
  return (
    <nav>
      <h2>Logo Here</h2>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/cart'} onClick={() => addToCart()}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  )
}

export default Header