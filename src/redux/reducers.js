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
            const itemExist = state.cartItems.length > 0
                && state.cartItems.find((i) => i.id === item.id);

            if (itemExist) {
                state.cartItems.forEach(i => {
                    if (i.id === item.id) i.quantity += 1;
                })
            } else {
                state.cartItems.push(item);
            }
        },
        decrement: (state, action) => {
            const id = action.payload;
            state.cartItems.forEach(i => {
                if (i.quantity > 0 && i.id === id) i.quantity -= 1;
            })

        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        }
    }
)