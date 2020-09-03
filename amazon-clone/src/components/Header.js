import React from 'react';
import '../styling/Header.css';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../state/StateProvider'
import { auth } from '../state/firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/* logo image */}
            <Link to="/">
                <img className="header__logo"
                    alt="Amazon logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to={!user ? "/login" : "/"} className="header__link">
                    <div onClick={login} className="header__option">
                        {/* remove @email from string*/}
                        <span className="header__optionLineOne">Hello {user?.email.substring(0, user?.email.lastIndexOf("@"))},</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* Shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
            {/* Basket icon with number */}
        </nav>
    )
}

export default Header;
