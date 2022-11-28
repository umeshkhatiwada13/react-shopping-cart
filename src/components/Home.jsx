import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";


const Home = () => {
  const dispatch = useDispatch();
  const productList = [{
    id: 1,
    name: "Mac",
    price: 200,
    imgSrc: img1
  },
  {
    id: 2,
    name: "Shoe",
    price: 50,
    imgSrc: img2
  },]

  const addToCartHandler = (options) => {
    dispatch({
      type: "addToCart",
      payload: options,
    });
    toast.success('Item added successfully');
  };


  return (
    <div className='home'>
      {
        productList.map((i) => (
          <ProductCard
            id={i.id}
            key={i.id}
            name={i.name}
            price={i.price}
            imgSrc={i.imgSrc}
            handler={addToCartHandler}
          />
        ))
      }
    </div>
  );
};

const ProductCard = ({ id, name, price, imgSrc, handler }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ id, name, price, quantity: 1, imgSrc })}>Add to Cart</button>
  </div>
)

export default Home;