import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        name: 'Rosie',
        engine: '5.3L V8',
        make: 'GMC',
        model: 'Sierra 1500',
        trim: 'SLT',
        miles: '118,345',
        max_speed: '108 mph',
        cost: 42650.00,
        number_of_owners: 3
    },

    reducers: {
        chooseName: (state,action) => {state.name = action.payload},
        chooseEngine: (state, action) => {state.engine = action.payload},
        chooseMake: (state, action) => {state.make = action.payload},
        chooseModel: (state, action) => {state.model = action.payload},
        chooseTrim: (state, action) => {state.trim = action.payload},
        chooseMiles: (state, action) => {state.miles = action.payload},
        chooseMaxSpeed: (state, action) => {state.max_speed = action.payload},
        chooseCost: (state, action) => {state.cost = action.payload},
        chooseNumberOfOwners: (state, action) => {state.number_of_owners = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEngine, chooseMake, chooseModel, chooseTrim, chooseMiles, chooseMaxSpeed, chooseCost, chooseNumberOfOwners} = rootSlice.actions;
