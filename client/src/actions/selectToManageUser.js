export const SELECT_USER = "SELECT_USER";

export const selectUser = userObj => ({
    type: SELECT_USER,
    payload: userObj
});