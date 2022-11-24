import React from 'react';

const Home = () => {
    const productList = [{
        id: 1,
        name: "Mac",
        price: 200,
        imgSrc: "test",
        handler: "test123"
    },
    {
        id: 2,
        name: "Earphone",
        price: 50,
        imgSrc: "test"
    },]
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
                        handler={i.handler}
                    />
                ))
            }
        </div>
    );
};

const ProductCard = ({ id, name, price, imgSrc, handler }) => {
    console.log('data ', name);
    <div className="productCard">
        <img src={imgSrc} alt={name} />
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={() => handler({ id, name, price, quantity: 1, imgSrc })}>Add to Cart</button>
    </div>
}

export default Home;