import React from 'react'
import '../styling/CheckoutProduct.css'
import { useStateValue } from '../state/StateProvider'

function CheckoutProduct({ index, id, title, price, image, rating }) {
    //eslint-disable-next-line
    const [{ }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
            index: index,
        })
    }

    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
                alt={title + " image"}
            />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <strong>{price}</strong>
                    <small>$</small>
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) =>
                            <span key={i} role="img" aria-label="1 star">⭐</span>)
                    }
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
