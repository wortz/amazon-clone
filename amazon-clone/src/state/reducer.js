export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_BASKET':
            //add item to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //remove item from basket

            //clone basket
            const newBasket = [...state.basket]
            
            //checking for cases of something going wrong
            if(state.basket[action.index].id===action.id){
                newBasket.splice(action.index, 1);
            }   else {    //if something goes wrong and the basket at index does not correspond to the id of the item
                console.warn(
                    "Cant remove product (id: " + action.id + " as something failed."
                );
            }

            //return new basket to the state
            return {
                ...state,
                basket: newBasket,
            }
        default:
            return state;
    }
}

export default reducer; 