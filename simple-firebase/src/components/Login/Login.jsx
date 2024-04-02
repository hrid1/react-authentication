import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log('google mama is coming')
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
        const loginUser = result.user;
        setUser(loginUser);
    })
    .catch(error => {
        console.log("error", error.message);
    })
  }


  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        {
          console.log(error);
        }
      });
  };


  
  return (
    <div>
      <h2>Log In Page</h2>
  
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="userPic" />
        </div>
      )}
  
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google Login</button>
          <button onClick={handleGithubSignIn}>Github SignIn</button>
        </>
      )}
    </div>
  );
  
};






export default Login;
