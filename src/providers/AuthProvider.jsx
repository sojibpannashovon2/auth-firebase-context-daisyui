import { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);


// const user = { displayName: "Md Arifur Rahman" }
const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null);

    //user registration

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user logIn after registration

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Observed OnState changed

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Auth state Chanaged !!!", currentUser);
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    //user logOut

    const logOut = () => {
        return signOut(auth)
    }

    //Sent context element for every components.
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;