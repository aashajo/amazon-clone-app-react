import React from 'react'
import "./Product.css"
// import Icon from '@material-ui/core/Icon';
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price}) {
    const [{cart}, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price
            }
        })
    };
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            {/* <div className="product_rating">
            {
                Array(rating).fill().map((_)=> 
                <Icon>star</Icon>
                )
            }
            </div> */}
            </div>
            <img src={image} alt="" />
            <button onClick={addToCart}>Add to cart</button>
        </div>
        
    )
}

export default Product
