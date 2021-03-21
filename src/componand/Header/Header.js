
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './header.css'


const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div classname='header'>
                
                <nav className="nav">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                        <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/booking">Booking</Link>
                    </li>
                    <li>
                    { loggedInUser.email ? (<>{loggedInUser.displayName}</>)  :(<Link to="/login">Login</Link>)} 
                   </li>                                                               
                </ul>
            </nav>
        
        </div>
    );
};

export default Header;