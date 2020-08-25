import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css";
import  CheckoutProduct  from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    const [{cart}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://images-fe.ssl-images-amazon.com/images/G/35/books/store/2020/BLM_BooksToRead_1500x150_V3.jpg" alt=""></img>
       
       {cart?.length === 0 ? (
           <div>
               <h2>Your Shopping Cart is empty</h2>
               <p> You have no items in your cart. To but one or more, click "Add to cart" next to the item </p>
               </div>
    ): (
        <div> 
            <h2 className="checkout_title">Your Shopping Cart</h2>
        {cart?.map((item) => (
            <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                />
        ))}
        </div>
    )}
    </div>
    {cart.length > 0 && (
        <div className="checkout_right">
            <Subtotal />
             </div>

    )}
        </div>

    )
}

export default Checkout
