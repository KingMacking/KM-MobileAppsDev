import { createSlice } from '@reduxjs/toolkit';

import CATEGORIES from '../../constants/data/categories.json';

const initialState = {
    data: CATEGORIES,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        // addProduct: (state, action) => {
        //     state.data.push(action.payload);
        // },
    },
});

export default categoriesSlice.reducer;
