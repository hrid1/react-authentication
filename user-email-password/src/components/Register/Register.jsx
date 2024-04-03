import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);
    if (password.length < 6) {
      setError("Password should be at least 6 characters !!!");
      return;
    } 
    else if (!/[A-Z]/.test(password)) {
      setError("Your Password should One Uppercase");
      return;
    }
    else if(!accepted) {
        setError("Plz accept Our terms and conditions");
        return;
    }

    // reset-error
    setError("");
    setSuccess("");

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Account Created Successully !!!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };

  return (
    <div>
      <h3 className="text-2xl my-4">Please Register page.</h3>
      <form onSubmit={handleRegister}>
        <input
          className="mb-4 w-1/3 p-2 rounded"
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <div className=" relative w-1/3 mx-auto">
          <input
            className="mb-4 w-full p-2 rounded"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Your Password"
          />
          <span className=" absolute right-2 top-3" onClick={() => setPassword(!showPassword)}>
            {
                showPassword ? <FaEye/> : <FaEyeSlash/>
            }
          </span>
        </div>
        <br />

            <div className="w-1/3 mx-auto text-left 0">
            <input className="mr-2 " type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept our Terms and Conditionns</label>
            </div>

        <br />
        <input
          className="btn btn-primary w-1/3"
          type="submit"
          value="Register"
        />
      </form>

      {{ success } && (
        <p className="text-green-500 text-xl font-semibold">{success}</p>
      )}

      {{ error } && (
        <p className="text-red-500 text-xl font-semibold m-2">{error}</p>
      )}

      <p>Already have an Acoount <Link to='/login' className="bold link">Log In</Link> </p>
    </div>
  );
};

export default Register;
