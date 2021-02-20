export const SET_CARD_DESIGN = "SET_CARD_DESIGN";
export const SET_COMPLEXITY = "SET_COMPLEXITY";

export const setCardDesignAction = (cardDesign) => ({
    type: SET_CARD_DESIGN,
    payload: cardDesign
});

export const setComplexityAction = (complexity) => ({
    type: SET_COMPLEXITY,
    payload: complexity
});
