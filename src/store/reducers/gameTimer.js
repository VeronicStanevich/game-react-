import {SET_TIME_START} from "../actions/gameTimer";

const defaultValue = {timeStart: Date.now()}

export const gameTimerReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case SET_TIME_START:
            return {...state, timeStart: action.payload};
        default:
            return state;
    }
}