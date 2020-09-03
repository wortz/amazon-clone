export const initialState = {
    basket: [{
        id: "123123",
        title: "Asus TUF Gaming H7 Black/Red",
        price: 99.99,
        image: "https://i.imgur.com/6aJyXUn.jpg",
        rating: 4,
    }],
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

            //find where the item is, returns -1 if is not in the basket
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            //if the item is in the basket
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {    //if the item is not in the basket
                console.warn(
                    "Cant remove product (id: " + action.id + " as its not in the basket."
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