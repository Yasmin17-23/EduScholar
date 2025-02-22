import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config'
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser , {
           displayName: name,
           photoURL: photo,
        })
    }

    //Get token from server
    //const getToken = async email => {
    //    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}`, 
    //        { email },
    //        { withCredentials: true }
    //    )
    //    return data;
    //}

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user in state', currentUser);
            setUser(currentUser);
             if(currentUser){
                const userInfo = { email: currentUser.email };
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { userInfo })
                  .then(res => {
                     if(res.data.token){
                        localStorage.setItem('token-access', res.data.token)
                     }
                  })
             }
             else {
                localStorage.removeItem('token-access')
             }
            setLoading(false);
        })

        return () => {
           return unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signInUser,
        signInWithGoogle,
        updateUserProfile,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children: PropTypes.element,
}

export default AuthProvider