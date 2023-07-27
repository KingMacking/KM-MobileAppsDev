import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    quantity: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity += 1;
            } else {
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            const updatedCart = state.items.filter((item) => item.id !== action.payload.id);
            state.items = updatedCart;
        },
        emptyCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
