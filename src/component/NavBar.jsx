import React from "react";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">
        <img src={process.env.PUBLIC_URL + "/pngwing.com.png"} width="100px" />
        <div className="nav-btn">
          <button id="join">회원가입</button>
          <button id="login">로그인</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
