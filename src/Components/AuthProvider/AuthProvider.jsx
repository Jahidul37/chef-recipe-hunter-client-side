// import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
// import { createContext } from "react";


const auth = getAuth(app);

const AuthProvider = () => {

    // export const authContext = createContext(null);  

    const user = null;
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        createUser,



        // const form = event.target;
        // const email = form.value;
        // const password = form.value;
        // console.log(form, email, password);

        // createUserWithEmailAndPassword(auth, email, password,)

        //     .then((result) => {
        //         const loggeduser = result.user;
        //         console.log(loggeduser);
        //     })
        //     .catch((error) => {
        //         error.message;
        //     });
    }
    return (
        <AuthProvider.Provider value={authInfo} >

        </AuthProvider.Provider >
    );
};

export default AuthProvider;