import React from "react";
import "./Login.scss";

import logo from "@logos/logo.gif";

const Login = (): JSX.Element => {
  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="" className="form">
          <h1 className="title">Welcome</h1>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name=""
            id="email"
            placeholder="example@example.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="*******"
            className="input input-password"
          />
          <input
            type="submit"
            defaultValue="Log in"
            className="primary-button login-button button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button button">
          Sign up
        </button>
      </div>
    </div>
  );
};

export { Login };
