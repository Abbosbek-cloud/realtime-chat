import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Abek Chat</span>
        <span className="title">Login</span>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <button>Log In</button>
        </form>
        Do not you have an account? <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Login;
