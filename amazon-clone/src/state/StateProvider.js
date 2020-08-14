import React, { createContext, useContext, useReducer } from "react";

//Needed to track the basket and the user info
//DATA LAYER
export const StateContext = createContext();

// Build the provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); 