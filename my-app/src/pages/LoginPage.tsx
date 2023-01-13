import React from "react";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
  return (
    <div className="Login">
      <div className="LoginBox">
        <div className="LoginHeader">Login</div>
        <div className="inputs">
          <input className="email" placeholder="Enter your email" />
          <input
            className="password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="submitbutton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
