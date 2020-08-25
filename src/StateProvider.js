//React Context API
//To set up a data layer to track the cart.
import React, {createContext, useContext, useReducer} from "react";

export const StateContext = createContext(); // creating datalayer


//building a provider to wrap the entire app
export const StateProvider =({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);