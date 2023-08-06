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
            if (itemInCart && itemInCart.stock > itemInCart.quantity) {
                itemInCart.quantity += 1;
            } else if (itemInCart && itemInCart.stock < itemInCart.quantity) {
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
        increaseQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.stock > itemInCart.quantity) {
                itemInCart.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.quantity > 1) {
                itemInCart.quantity -= 1;
            }
        },
    },
});

export const { addToCart, removeFromCart, emptyCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
