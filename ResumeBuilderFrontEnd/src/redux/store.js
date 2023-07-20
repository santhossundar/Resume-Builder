import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './reducers/paginationReducer'

const store = configureStore({
    reducer: navigationReducer
});

export default store;