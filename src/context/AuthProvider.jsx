import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';


const AuthProvider = ({children}) => {
    const[user,setUser]= useState(null);
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const signInUser = (email,password)=>{
       return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() =>{
        const unSubscribe =onAuthStateChanged(auth, currentUser =>{
            //sconsole.log('current user inside',currentUser);
            setUser(currentUser);
        })
        return ()=>{
                unSubscribe();
        }

    },[])
    const userInfo = {
        user,
        createUser,
        signInUser
    }
    return (
       <AuthContext value={userInfo}>
            {children}
       </AuthContext>
    );
};

export default AuthProvider;