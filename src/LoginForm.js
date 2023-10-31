import React, { useState } from 'react'; // React library and 'useState' hook from React to manage component state.

const LoginForm = () => {
  // State to manage the username and password input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the login action
  const handleLogin = () => {
    // this is what will validate the user's login credentials
    if (username && password) {  /* checks if username and password have been provided */
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password'); /*if false, will alert the user of invalid UN or Pwrd */
    }
  };

  return (   /*returning the login form and it's elements */
    <div className="login-form login-container">
      <h3 className="login-heading">Log In</h3>
      <input   /* User types in thier username */
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input   /* User types in thier password */
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}      /* the button triggers the login when clicked  */
      />
      <button onClick={handleLogin}>Login</button> 
      {isLoggedIn && <p>Welcome, {username}!</p>}
    </div>
  );
};

export default LoginForm;   /* need to export LoginForm component so it can be used in other parts of the app */
