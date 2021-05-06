
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import { useAuth } from '../contexts/auth-context';


const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loginUserWithCredentials} = useAuth();   
    const { state } = useLocation();
    const history = useHistory();
    
    const handleLogin = () => {
        loginUserWithCredentials(username,password);
        history.push(state?.from ? state.from : '/');
    }

    return(
        <div className="flex flex-center login-container">
            <div className="login-form">
                <h3 className="text-center pb-1">Login</h3>
                <div class="form-group">
                    <label class="" for="username">Username</label>
                    <input class="form-control" type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} autoComplete="off"/>
                </div>
                <div class="form-group">
                    <label class="" for="password">Password</label>
                    <input class="form-control" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="off"/>
                </div>
                <div className="flex flex-center">
                    <button className="btn btn-secondary btn-sm" onClick={handleLogin}>Login</button>
                </div>
                
                <p className="mt-1">username: <strong>admin</strong> | password: <strong>password</strong></p>

            </div>
        </div>
    )

}

export default LoginPage;