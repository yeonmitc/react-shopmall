import React from 'react'
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    console.log("test")
    navigate('/'); 
  }    

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(event) => loginUser(event)}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className="form-input"
          />
          <p className="form-text">
            We'll never share your email with anyone else.
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-input"
          />
        </div>

        <div className="form-group checkbox-group">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Check me out</label>
        </div>

        <button type="submit" className="btn-login">
          로그인
        </button>
      </form>
    </div>
  );

};


export default Login
