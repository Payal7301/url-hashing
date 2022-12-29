import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import AddUrlComponent from '../AddUrlComponent';

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    // const register = () => history.push("user/register");
    // const login = () => history.push("user/login");
    const register=()=>{

    }
    const login=()=>{

    }
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <div>
                <div className="App container mt-5">
                 <AddUrlComponent />
                </div>
                <button className="btn btn-primary mr-2" onClick={logout}>Logout</button>
                </div>
            ) : (
                <>
                <Link to='/user/register'><button className="btn btn-primary mr-2" >Sign Up</button></Link>
                <Link to='/user/login'><button className="btn btn-primary mr-2" >Login</button></Link>
                </>
            )}
        </nav>
    )
}

export default AuthOptions;