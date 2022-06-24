import { login, logout } from '../../actions/auth';

test('should generete login action object', () => {
    const uid=123;
    const action = login(uid);
    expect(action).toEqual({
        type:'AUTH_LOGIN',
        uid
    });
});

test('should generete logout action object', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'AUTH_LOGOUT'
    });
});