import { useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";


const PrivateRoute = ({children}) => {
    
    const {user} = useContext(AuthContext)

    const navigate = useNavigate();

    if(!user) {
        // here we need to return a component that's why we use navigate compo. insted of useeffect  
        return <Navigate to='/login'></Navigate>
    }

    return children
};

export default PrivateRoute;