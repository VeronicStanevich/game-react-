import {persistReducer, persistStore} from "redux-persist";
import {combineReducers, createStore} from "redux";
import {combinedReducer} from "./reducers";

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = createStore(
    persistedReducer
)
const persistor = persistStore(store);

export {store, persistor}
