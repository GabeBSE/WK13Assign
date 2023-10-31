import React from 'react'; /*React library*/
import './App.css';       /*imports the necessary files (App,LoginForm and Nav.js files) created to run my app */
import LoginForm from './LoginForm';
import Navigation from './Navigation';


function App() {         /* Parent-main component*/
  return (               /* Return the JSX (JavaScript XML) that represents the structure of the component.*/
    <div className="App">  
      <Navigation />       
      <LoginForm /> 
    </div>               /* Navigation & LoginForm are child components */


  );
}

export default App;   /* need to export App component so it can be used in other parts of the app */
