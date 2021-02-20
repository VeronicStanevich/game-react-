import {SET_CARD_DESIGN, SET_COMPLEXITY} from "../actions/gameSettings";

const defaultState = {cardDesign: 1, complexity: "easy"};

export const gameSettingsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CARD_DESIGN:
            return {...state, cardDesign: action.payload};
        case SET_COMPLEXITY:
            return {...state, complexity: action.payload};
    }
    return state;
}