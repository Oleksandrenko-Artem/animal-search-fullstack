import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    pets: [],
    petTypes: [],
    error: null,
    isFetching: false,
};

const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
});

const { reducer } = petsSlice;

export default reducer;