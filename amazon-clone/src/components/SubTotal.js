import React from 'react';
import '../styling/SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../state/StateProvider';
import { getBasketTotal } from '../state/reducer';
import { Link } from 'react-router-dom';

function SubTotal() {
    const [{ basket, user }] = useStateValue();

    return (
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>
                                {value}
                            </strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift.
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <Link to={!user ? "/login" : "/"} className="subtotal__finish">
                <button>Proceed to Checkout</button>
            </Link>
        </div>
    )
}

export default SubTotal
