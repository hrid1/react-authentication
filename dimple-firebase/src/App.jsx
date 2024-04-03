
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';
import { useState } from 'react';
const auth = getAuth(app);

const provider = new GoogleAuthProvider();


function App() {

  const [user, setUser ] = useState(null);

  const handleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result => {
      const loggedUser = result.user;
      setUser(loggedUser);
      console.log(loggedUser);
    })
    .catch(error => {
      console.log("error: ", error.message)
    })
  }

  return (
    
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>

      <div>
        {  user &&
          <h2>hello, {user.displayName}</h2>
        }
      </div>
      
      
      
    </>
  )
}

export default App
