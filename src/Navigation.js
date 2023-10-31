import React from 'react';

const Navigation = () => {   /* defining the Navigation function */
  return (                  /*returning the navigation component */
                         /* navigation links created */
    <div className="navbar"> 
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  );
};
 
export default Navigation;  /* need to export Navigation component so it can be used in other parts of the app */
