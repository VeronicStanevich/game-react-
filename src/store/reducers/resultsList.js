import {ADD_RESULT_LIST_ITEM} from "../actions/resultList";

export const resultsListReducer = (state=[], action) =>{
    switch (action.type){
        case ADD_RESULT_LIST_ITEM:
            return [...state, action.payload];
    }
    return state;
}