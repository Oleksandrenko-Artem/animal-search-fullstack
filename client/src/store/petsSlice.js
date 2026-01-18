import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createPet, deletePet, getPets, getTypes } from "../api";
import CONSTANTS from './../constants';
import { pendingCase, rejectedCase } from "./functions";

export const deletePetThunk = createAsyncThunk(`${CONSTANTS.PET_SLICE_NAME}/delete/pet`, async (petId, thunkAPI) => {
    try {
        await deletePet(petId);
        return petId;
    } catch (error) {
        return thunkAPI.rejectWithValue(error?.message);
    }
});

export const getPetsThunk = createAsyncThunk(`${CONSTANTS.PET_SLICE_NAME}/get/pets`, async (petTypeId, thunkAPI) => {
    try {
        const response = await getPets(petTypeId);
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
    filter: {
        petType: '',
    },
    error: null,
    isFetching: false,
};

const petsSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        changePetTypeFilter: (state, action) => {
            state.filter.petType = action.payload;
        },
    },
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
        builder.addCase(deletePetThunk.pending, pendingCase);
        builder.addCase(deletePetThunk.fulfilled, (state, action) => {
            state.isFetching = false;
            state.error = null;
            state.pets = state.pets.filter(pet => pet.id !== action.payload);
        });
        builder.addCase(deletePetThunk.rejected, rejectedCase);
    },
});

const { reducer, actions } = petsSlice;

export const { changePetTypeFilter } = actions;

export default reducer;