import React from 'react';
import "./login.scss"

function Login() {
  return (
      <div className="login">
          <div className="top">
            <div className="wrapper">
                <img className='logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/800px-Netflix_2015_logo.svg.png" 
                    alt="" 
                />
            </div>

            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or Phone Number' />
                    <input type="password" placeholder='Password' />

                    <button className="loginButton">Sign In</button>
                    <span>New to Netflix? <b>Sign Up Now</b></span>
                </form>
            </div>
        </div>
      </div>
  );
}

export default Login;
