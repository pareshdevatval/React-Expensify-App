export default (state = {}, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN':
            return {
                uid: action.uid
            };
        case 'AUTH_LOGOUT':
            return {};
        default:
            return state;
    }
};