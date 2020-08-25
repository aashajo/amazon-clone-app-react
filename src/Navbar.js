import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';

function Navbar() {
    const [{cart, user}] = useStateValue();

    const login = () =>{
        if(user) {
            auth.signOut();
        }
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <Link to="/">
            <img className="navbar_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""></img>
            </Link>

            {/* Searchbar */}
            <div className="navbar_search">
            <input type="text" className="navbar_searchbar"/>
            <SearchIcon className="navbar_searchicon" />
            </div>

            {/* Links */}
            <div className="navbar_nav">
                {/* Link one */}
                <Link to={!user && "/login"} className="navbar_link">
                <div onClick={login} className="navbar_option">
                <span className="navbar_optionLineone">Hello {user?.email},</span>
                <span className="navbar_optionLinetwo">{user ? "Sign Out" : "Sign In"} </span>
                </div>
                </Link>

                {/* Link two */}
                <Link to="/" className="navbar_link">
                <div className="navbar_option">
                <span className="navbar_optionLineone">Returns</span>
                <span className="navbar_optionLinetwo">& Orders</span>
                </div>
                </Link>

                {/* Link three */}
                <Link to="/" className="navbar_link">
                <div className="navbar_option">
                <span className="navbar_optionLineone">Your</span>
                <span className="navbar_optionLinetwo">Prime</span>
                </div>
                </Link>

                {/* Link four */}
                <Link to="/checkout" className="navbar_link">
                    <div className="navbar_cart">
                        <ShoppingBasketIcon />
                         <span className="navbar_optionLinetwo navbar_cartcount">{cart?.length}</span>
                    </div>
                </Link>

            </div>

        </nav>
        
    )
}

export default Navbar
