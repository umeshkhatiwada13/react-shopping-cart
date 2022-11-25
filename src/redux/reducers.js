import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
    {
        cartItems: [],
        subTotal: 0,
        shipping: 0,
        tax: 0,
        total: 0,
    },
    {
        addToCart: (state, action) => {
            const item = action.payload;
            const itemExist = state.cartItems.length > 0 && state.cartItems.find((i) => i.id === item.id);
            console.log("Item ", item, " and state ", state);
            console.log("Is item duplicate ", itemExist);

            if (itemExist) {
                console.log("Item Exists")
                state.cartItems.forEach(i => {
                    if (i.id === item.id) i.quantity += 1;
                })
            } else {
                console.log("Pushing Item to Cart");
                state.cartItems.push(item);
                console.log("Cart Items ", state.cartItems);
            }
        }
    }
)