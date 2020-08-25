export const initialState = {
    cart: [],
    user:null,
};

export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => item.price + amount, 0);

const reducer=(state, action) => {
    console.log(action);
    switch(action.type) {

        case "SET_USER":
            return {
                ...state, user: action.user
            };

        case 'ADD_TO_CART':
        return { 
            ...state, //current state
            cart: [...state.cart, action.item]
        }
        case 'REMOVE_FROM_CART':

        //copied the cart
            let newCart = [...state.cart]

            //checking to see if any existing products
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)
            if(index >= 0 ){
                //if exists, remove it
                newCart.splice(index, 1);

            } else {
                console.warn("Cant remove")
            }
            return {...state, cart: newCart}
        default:
            return state;
    }
}

export default reducer;