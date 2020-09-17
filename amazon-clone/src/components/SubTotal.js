import React from 'react';
import '../styling/SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../state/StateProvider';
import { getBasketTotal } from '../state/reducer';
import { useHistory } from 'react-router-dom';

function SubTotal() {
    const history = useHistory();
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
            <button className="subtotal__finish"
                onClick={() => !user ? history.push("/login") 
                : history.push("/payment")} >Proceed to Checkout
            </button>
        </div>
    )
}

export default SubTotal
