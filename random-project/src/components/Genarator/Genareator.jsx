import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
const Genareator = () => {

  const { user } = useContext(AuthContext);
  console.log(user)

//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     }
//   }, []);

  return (
    <div>
      <h2>This is genarator</h2>
      {
        user ? (
            <form action="">
            <textarea name="" id="" cols="30" rows="10" className="">
    
            </textarea>
            <button>Add your comment</button>
          </form>
        ): (
            <Link className="underline text-blue-400 " to='/login'>Login frist to comment</Link>
        )
      }
    </div>
  );
};

export default Genareator;
