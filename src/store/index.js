import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counter';
import themeSlice from './slices/theme';

export default configureStore({
    reducer: {
        counter: counterSlice,
        theme: themeSlice
    }
})

// configureStore => reducer
// Slice => name , initialState , reducers
// reducers => functions => state, action => update state
// from slice => export const { reducerFunctions } = slice.actions => component 
// from slice => export defult slice.reducer => configureStore