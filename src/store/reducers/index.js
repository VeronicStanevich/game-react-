import {combineReducers} from "redux";
import {userReducer} from "./user";
import {gameSettingsReducer} from "./gameSettings";

export const combinedReducer = combineReducers({
    user:  userReducer,
    gameSettings: gameSettingsReducer
});