import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase/firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    function signin(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    function signout(){
        return auth.signOut;
    }
    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }
    function updateEmail(email){
        return currentUser.updateEmail(email)
    }
    function updatePassword(password){
        return currentUser.updatePassword(password)
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })  

        return unsubscribe
    }, [])


    const value = {
        currentUser,
        signin, 
        signup,
        signout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {children}            
        </AuthContext.Provider>
    )
}
