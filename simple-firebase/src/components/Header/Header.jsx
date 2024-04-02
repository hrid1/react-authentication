import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
           <h3>Header bro</h3> 
           <ul>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/about'>About</Link>
           </ul> 
        </div>
    );
};

export default Header;