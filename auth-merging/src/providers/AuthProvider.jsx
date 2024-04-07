import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const authInfo = { name: "nodi sagor" };

  const registation = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  return <AuthContext.Provider value={authInfo} registation={registation}>
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
