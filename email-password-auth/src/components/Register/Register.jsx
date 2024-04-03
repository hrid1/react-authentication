import { useState } from "react";
import "./register.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);

const Register = () => {
 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // const handleEmailChange = (e) => {
  //   console.log(e.target.value);
  // };

  // const handlePasswordBlur = (e) => {
  //   console.log(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess('');
    setError('');
    const email = e.target.email.value;
    const password = e.target.password.value;

    // validate
    if(!/(?=.*[A-Z])/.test(password)){
      setError('Plz add at least one UpperCase');
      return;
    }

    // creat user in firebase
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setSuccess('Account Created Successfully!!!')
      setError('');
      e.target.reset();
    })
    .catch(error => {
      console.error(error)
      setError(error.message)
    })

  }

  //    console.log(email);

  return (
    <div>
      <h2>Please Register</h2>
      <form  onSubmit={handleSubmit}>
        <input
          // onChange={handleEmailChange}
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <br />
        <input
          // onBlur={handlePasswordBlur}
          type="password"
          name="password"
          placeholder="Enter Your Password"
          required
        />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default Register;
