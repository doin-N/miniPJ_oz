import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Singup.css";
import { auth } from "../firebase";

const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // ^ = 문자열 시작에서 [^\s@] 공백이나 @문자가 아닌 문자가 + 하나이상와야한다
    // @ = @문자 뒤에 [^\s@] 공백이나 @문자가 아닌 문자가 + 하나이상와야한다
    // \. = .문자 뒤에 [^\s@] 공백이나 @문자가 아닌 문자가 + 하나이상오고 문자열의 끝이여야함을 의미
    return emailRegex.test(email);
    // emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    //(?=.*[a-z]) 최소 하나의 소문자 포함
    //(?=.*[A-Z]) 최소 하나의 대문자 포함
    //(?=.*\d) 최소 하나의 숫자
    //(?=.*[!@#$%^&*]) 최소 하나의 특수문자
    //이모든걸 합해서 최소 8자 이상으로
    return passwordRegex.test(password);
  };

  const handleSignup = async (e) => {
    e.preventDefault(); //폼 제출시 페이지 새로고침 방지
    if (!validateEmail(email)) {
      setError("유효한 이메일을 입력해주세요.");
      return;
    }
    if (!validatePassword(password)) {
      setError(
        "비밀번호는 최소 8자 이상, 하나 이상의 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다."
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      setError(error.message);
    }
  };

  //화면에 보여주는 부분
  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">이름:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">이메일:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">비밀번호 확인:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Singup;
