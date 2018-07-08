const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PAGE_LOADER/TOGGLE':
            return action.payload;

        default:
            return state;
    }
};