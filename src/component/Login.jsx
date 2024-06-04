import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="divlogin-page">
        <h1>로그인</h1>

        <div className="login-pag-a">
          <lavel name="id" htmlFor="id">
            {" "}
            ID : &nbsp;
            <input type="text" name="id" autoComplete="off" />
          </lavel>

          <lavel name="password" htmlFor="password">
            {" "}
            비밀번호 : &nbsp;
            <input type="password" name="password" autoComplete="off" />
          </lavel>
          <button
            type="submit"
            style={{
              width: "100px",
              height: "30px",
              color: "black",
            }}
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
