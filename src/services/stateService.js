import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ACTIVE_BUTTON } from "../Head/constants";
import { getDefaultFrom, getDefaultUntil } from "../utils/dates";

const initialMainState = {
    activePrice: DEFAULT_ACTIVE_BUTTON,
    activeHour: 1,
    showSideBar: false,
    errorMessage: null,
    bestUntil: 0,
};

const initialDateState = {
    from: getDefaultFrom(),
    until: getDefaultUntil(),
};

export const setActivePrice = createAction('setActivePrice');
export const setActiveHour = createAction('setActiveHour');
export const setShowSideBar = createAction('setShowSideBar');
export const setErrorMessage = createAction('setErorMessage');
export const setBestUntil = createAction('setBestUntil');

const main = createReducer(initialMainState, (builder) => {
    builder.addCase(setActivePrice, (state, action) => {
        state.activePrice = action.payload;
    })
        .addCase(setActiveHour, (state, action) => {
            state.activeHour = action.payload;
        })
        .addCase(setShowSideBar, (state, action) => {
            state.showSideBar = action.payload;
        })
        .addCase(setErrorMessage, (state, action) => {
            state.errorMessage = action.payload;
        })
        .addCase(setBestUntil, (state, action) => {
            state.bestUntil = action.payload;
        })
});

const datesSlice = createSlice({
    name: 'date',
    initialState: initialDateState,
    reducers: {
        setFrom: (state, action) => {
            state.from = action.payload;
        },
        setUntil: (state, action) => {
            state.until = action.payload;
        },
    },
});

export const { setFrom, setUntil } = datesSlice.actions;

export const store = configureStore({
    reducer: { main, date: datesSlice.reducer },
});



