import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
    // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const authInfo = {user, createUser, loginUser};

  return <AuthContext.Provider value={authInfo} >
        {children}
  </AuthContext.Provider>;
};

export default AuthProvider;



/**
  1. create context
  2. set provider with value
  3. use the AuthProvider in the main.jsx file 
  4. access children in the AuthProvider component as children and use it in the middle of the provider
 */
