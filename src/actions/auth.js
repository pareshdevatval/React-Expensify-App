import { googleAuthProvider } from "../firebase/firebase";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";

export const login = (uid) => ({
    type: 'AUTH_LOGIN',
    uid
});

export const startLogin = () => {
    return (dispatch) => {
        return signInWithPopup(getAuth(), googleAuthProvider);
    }
};

export const logout = () => ({
    type: 'AUTH_LOGOUT',
});

export const startLogout = () => {
    return () => {
        return signOut(getAuth())
    }
};