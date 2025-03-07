import React, {useState} from 'react';
import Todo from './todo';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if(username && password){
        setIsLoggedIn(true);
        alert('You are logged in!');
    } else{
        alert('Invalid username or password');
    }
  };

  if (isLoggedIn){
    return <Todo />;
  }

    return (
    <div className="login-container">
    <h1>Login</h1>
     <form>
     
        <label> Username: </label>
        <input type="text"
        value={username} 
        onChange={(e) => setUsername(e.target.value)} />
        <br />
         
         <label> Password: </label>
        <input type="password"
        value={password} />
        onChange={(e) => setPassword(e.target.value)}
        <br />

        <button onClick={handleLogin}> Login </button>

     </form> 
    </div>
  );
};

export default Login;
