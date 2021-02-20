import {CREATE_USER} from "../actions/user";

export const userReducer = (state = null, action) =>{
    switch (action.type){
        case CREATE_USER:
            return action.payload;
    }
    return state;
}
