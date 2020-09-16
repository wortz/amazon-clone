import React from 'react'
import { useStateValue } from '../state/StateProvider';
import '../styling/Checkout.css'
import CheckoutProduct from '../components/CheckoutProduct';
import SubTotal from '../components/SubTotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png"
                    alt="Checkout Add"
                />
                {basket.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or more items,
                            click "Add to basket" next to the item.
                    </p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {/* List all the itens on the basket */}
                            {basket.map((item, i) =>
                                <CheckoutProduct
                                    key={i}
                                    index={i}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            )}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <SubTotal />
                </div>
            )}
        </div>
    )
}

export default Checkout;
