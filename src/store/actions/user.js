export const CREATE_USER = "CREATE_USER";

export const createUserAction = (user) => {
    return {
        type: CREATE_USER,
        payload: user
    };
}