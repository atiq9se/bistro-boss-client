import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = ()=>{
        setLoading(true);
        
    }

    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return(()=>{
            return unSubscribe;
        })
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;