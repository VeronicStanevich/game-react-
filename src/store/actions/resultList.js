export const ADD_RESULT_LIST_ITEM = "ADD_RESULT_LIST_ITEM";
export const addResultListAction = (item) => {
    return {
        type: ADD_RESULT_LIST_ITEM,
        payload: item
    }
}