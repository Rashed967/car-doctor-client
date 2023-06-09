import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    

    const googleProvider = new GoogleAuthProvider()
    
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email : currentUser.email,
                  }
                fetch('http://localhost:5000/jwt', {
            method : "POST",
            headers : {
              'content-type' : 'application/json'
            },
            body : JSON.stringify(loggedUser)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            // warning : local storage 
            localStorage.setItem('car-access-token', data.token)
          })
            console.log(loggedUser)
            }

            else{
                localStorage.removeItem('car-access-token')
            }
        }) 
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logout,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;