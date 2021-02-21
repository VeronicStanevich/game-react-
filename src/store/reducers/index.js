import {combineReducers} from "redux";
import {userReducer} from "./user";
import {gameSettingsReducer} from "./gameSettings";
import {gameTimerReducer} from "./gameTimer";
import {resultsListReducer} from "./resultsList";

export const combinedReducer = combineReducers({
    user:  userReducer,
    gameSettings: gameSettingsReducer,
    gameTimer: gameTimerReducer,
    resultsList: resultsListReducer
});