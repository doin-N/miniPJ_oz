import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <Link to={"/"}>
          <img
            src={process.env.PUBLIC_URL + "/pngwing.com.png"}
            width="100px"
          />
        </Link>
        <div className="nav-btn">
          <Link to={`/singup`}>
            <button
              id="join"
              style={{
                width: "100px",
                height: "30px",
                color: "black",
              }}
            >
              회원가입
            </button>
          </Link>
          <Link to={`/login`}>
            <button
              id="login"
              style={{
                width: "100px",
                height: "30px",
                color: "black",
              }}
            >
              로그인
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
