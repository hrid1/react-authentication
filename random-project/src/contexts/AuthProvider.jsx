import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { createContext, useState } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({name: 'hridoyu'});
    const [loading, setLoading] = useState(null);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    return <AuthContext.Provider value={{user, setUser, login, loading, setLoading}}>
        { children }
    </AuthContext.Provider>
};

export default AuthProvider;