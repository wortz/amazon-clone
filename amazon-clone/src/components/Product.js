import React from 'react';
import '../styling/Product.css';
import { useStateValue } from '../state/StateProvider';

// id, title, price, rating, image
function Product({ id, title, price, image, rating }) {
    //eslint-disable-next-line
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        //Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>{price}</strong>
                    <small>$</small>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_, i) =>
                            <span key={i} role="img" aria-label="1 star">⭐</span>)
                    }
                </div>
            </div>
            <img className="product__image" src={image} alt={title + " Image"} />
            <button onClick={addToBasket}>Add to basket</button>

        </div>
    )
};

export default Product;
