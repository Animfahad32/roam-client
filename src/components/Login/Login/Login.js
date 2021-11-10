import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,  setUsers,  setIsLoading} = useAuth()
    const location = useLocation()
    const history = useHistory()

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result=> {
            setUsers(result.user)
            history.push(location?.state?.from);
        })
        .finally(()=> {setIsLoading(false)})
    }
    return (
        <div className="mt-5 p-5">
           <div className="chose-head ">
                <h3 className="chose1"> Please Login</h3>
                <h2 className="chose2"><span className="span-bg">Login</span>  Using Google</h2>
            </div>
            
            <div className="mt-5 p-5 text-center">
            <button type="button" onClick={handleGoogleLogin} className="btn btn-style btn-lg"><i className="fab fa-google"></i> Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;