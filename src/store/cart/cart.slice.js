import { createSlice } from '@reduxjs/toolkit';

import { cartTotal } from '../../utils/functions';

const initialState = {
    items: [],
    quantity: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.stock > itemInCart.quantity) {
                itemInCart.quantity += 1;
                state.total = cartTotal(state.items);
            } else if (itemInCart && itemInCart.stock < itemInCart.quantity) {
            } else {
                state.items.push(action.payload);
                state.total = cartTotal(state.items);
            }
        },
        removeFromCart: (state, action) => {
            const updatedCart = state.items.filter((item) => item.id !== action.payload.id);
            state.items = updatedCart;
            state.total = cartTotal(state.items);
        },
        emptyCart: (state) => {
            state.items = [];
            state.total = cartTotal(state.items);
        },
        increaseQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.stock > itemInCart.quantity) {
                itemInCart.quantity += 1;
                state.total = cartTotal(state.items);
            }
        },
        decreaseQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.quantity > 1) {
                itemInCart.quantity -= 1;
                state.total = cartTotal(state.items);
            }
        },
    },
});

export const { addToCart, removeFromCart, emptyCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
