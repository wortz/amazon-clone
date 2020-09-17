import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../components/CheckoutProduct';
import { useStateValue } from '../state/StateProvider';
import "../styling/Payment.css";
function Payment() {
    const [{basket, user}] = useStateValue();
    
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout 
                    (<Link to="/checkout">
                        {basket?.length} items
                    </Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Rua de Cima 123</p>
                        <p>Alheira, Portugal</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className="payment__items">
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
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
