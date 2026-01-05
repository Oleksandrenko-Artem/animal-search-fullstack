export const pendingCase = (state) => {
    state.isFetching = true;
    state.error = null;
};
export const rejectedCase = (state, action) => {
    state.error = action.payload;
    state.isFetching = false;
};