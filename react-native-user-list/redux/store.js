import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer, } from 'redux-persist';

const presistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['users']
}
const rootReducer = combineReducers({
    users: usersReducer
})
const presistedReducer = persistReducer(presistConfig, rootReducer)


export const store = configureStore({
    reducer: presistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});

export const persistor = persistStore(store);
export default store;

