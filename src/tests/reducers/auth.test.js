import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'AUTH_LOGIN',
        uid: '123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'AUTH_LOGOUT'
    };
    const state = authReducer({ uid: '123' }, action);
    expect(state).toEqual({});
});