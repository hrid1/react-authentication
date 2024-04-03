import { Link } from "react-router-dom";
import './header.css'


const Header = () => {
    return (
        <nav>
           
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
                <Link to='/about'>About</Link>
                <Link to='/btlogin'>Bootstrap Form</Link>
             
        </nav>
    );
};

export default Header;