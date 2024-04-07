import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword( auth, email, password )
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
   
   
   
    const authInfo = { user, creatUser, loginUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

// AuthProvider.proptypes = {
//     children: PropTypes.node
// }


// 1.create provider and export it
// 2.set provider with value
// 3.use auth provider in main.jsx file


// dfhadfh
