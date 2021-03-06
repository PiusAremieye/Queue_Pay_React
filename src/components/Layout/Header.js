import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../auth-context/authProvider';

function Header() {
    const {isAuthenticated, dispatchRed } = useContext(authContext)    
    const [auth, setAuth] = useState({})

    const logout = (e) =>{
        e.preventDefault();
        dispatchRed({'type':'LOGOUT'})
        localStorage.clear();
    }

    useEffect(() => {
        if(isAuthenticated){
          const json = localStorage['auth'] ? JSON.parse(localStorage['auth']) : {}
          setAuth({...json})          
        }
    },[isAuthenticated])
    
    const authenticationLinks = (
        <React.Fragment>
            <div className="container">
                <Link className="navbar-brand" to="/dashboard">
                    <h1>Queue Pay</h1>
                </Link> 
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto"> 
                    <li className="nav-item">  
                        <Link className="nav-link text-light" to="/dashboard">
                            <i className="fa fa-user-circle mr-1" />{auth.fullName}
                        </Link>
                    </li>                       
                    <li className="nav-item">
                        <a href='/' className="nav-link text-light" onClick={logout}>
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>    
    )

    const guestLinks =(
        <React.Fragment>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <h1>Queue Pay</h1>
                </Link> 
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/Signup">
                            Sign up
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/login">
                            Login
                        </Link>
                    </li>
                </ul>                
           </div>
        </React.Fragment>
    )

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">        
            <button className="navbar-toggler" type="button" data-toggler="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>
            
            <div className="collapse navbar-collapse" id="mobile-nav">
                {isAuthenticated ? authenticationLinks : guestLinks}
            </div>
        </nav>
    )
}

export default Header;