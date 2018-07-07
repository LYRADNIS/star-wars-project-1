const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FILMS/STORE_FILMS':
            return action.payload;

        case 'FILMS/STORE_FILMS_FAILURE':
            return INITIAL_STATE;

        default:
            return state;
    }
};