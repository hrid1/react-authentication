import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";


const auth = getAuth(app);





const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); 
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            setSuccess('User Login Successful');
            setError('')
            

        })
        .catch(error => {
            setError(error.message)
            
        })

    }
    return (
        <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" name="password" required />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p>{error}</p>
        <p>{success}</p>
      </div>
    );
};

export default Login;