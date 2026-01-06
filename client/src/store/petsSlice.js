import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPet, getPets, getTypes } from "../api";
import CONSTANTS from './../constants';
import { pendingCase, rejectedCase } from "./functions";

export const getPetsThunk = createAsyncThunk(`${CONSTANTS.PET_SLICE_NAME}/get/pets`, async (_, thunkAPI) => {
    try {
        const response = await getPets();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.message);
    }
});

export const getTypesThunk = createAsyncThunk(`${CONSTANTS.PET_SLICE_NAME}/get/types`, async (_, thunkAPI) => {
    try {
        const response = await getTypes();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.message);
    }
});

export const createPetThunk = createAsyncThunk(`${CONSTANTS.PET_SLICE_NAME}/create`, async (payload, thunkAPI) => {
    try {
        const response = await createPet(payload);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.message);
    }
});

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
    extraReducers: (builder) => { 
        builder.addCase(getTypesThunk.pending, pendingCase);
        builder.addCase(getTypesThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            state.error = null;
            state.petTypes = action.payload;
        });
        builder.addCase(getTypesThunk.rejected, rejectedCase);
        builder.addCase(getPetsThunk.pending, pendingCase);
        builder.addCase(getPetsThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            state.error = null;
            state.pets = action.payload;
        });
        builder.addCase(getPetsThunk.rejected, rejectedCase);
        builder.addCase(createPetThunk.pending, pendingCase);
        builder.addCase(createPetThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            state.error = null;
            state.pets.push(action.payload);
        });
        builder.addCase(createPetThunk.rejected, rejectedCase);
    },
});

const { reducer } = petsSlice;

export default reducer;