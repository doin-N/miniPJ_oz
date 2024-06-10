import React from "react";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase";

const Login = () => {
  //구글 로그인 팝업창 뜨게하기 위한
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider(); //로그인을 구현되는데 사용되는 도구  인증 플로우를 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDataImg, setuserDataImg] = useState({});

  const navigate = useNavigate();

  //구글 로그인 눌렀을때 구글 로그인 팝업창 뜨게 하기
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      //팝엉이 뜨게 한다.
      .then((result) => {
        console.log(result);
        navigate("/");
        //구글창 로그인이 되면 메인 페이지로 이동
        setuserDataImg(result.user);
      })
      .catch((error) => {
        alert(error.message);
        navigate("/login");
      });
    console.log(userDataImg);
  };

  //회원가입 후 로그인
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    // const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  //로그인 화면에 보이는 내용
  return (
    <>
      <div className="divlogin-page">
        <h1>로그인</h1>
        <div className="login-all">
          <form onSubmit={handleEmailLogin}>
            <div className="login-pag-a">
              <lavel name="id" htmlFor="id">
                {" "}
                ID : &nbsp;
                <input
                  type="text"
                  name="id"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </lavel>

              <lavel name="password" htmlFor="password">
                {" "}
                비밀번호 : &nbsp;
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </lavel>
              <button
                type="submit"
                style={{
                  width: "100px",
                  height: "30px",
                  color: "black",
                }}
                onClick={handleEmailLogin}
              >
                로그인
              </button>
            </div>
          </form>
          <button
            type="submit"
            style={{
              width: "100px",
              height: "30px",
              color: "black",
            }}
            onClick={handleGoogleLogin}
          >
            구글 로그인
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

// 구글로그인 할껀지 말껀지 설정하는거
//구글로그인 버튼
//회원가입후 자동 로그인 되지 않게 하기
