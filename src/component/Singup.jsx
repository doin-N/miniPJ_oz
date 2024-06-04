import React from "react";
import "./Singup.css";

const Singup = () => {
  return (
    <div className="sing">
      <div className="sing-up">
        <h1>회원가입</h1>

        {/* <div>
          <p>기본정보</p>
        </div> */}
        <h5>이름</h5>
        <input type="text" name="name" placeholder="이름" autoComplete="off" />

        <h5>이메일</h5>
        <div>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            autoComplete="off"
          />{" "}
          @
          <select>
            <option value="gmail.com">gmail.com</option>
          </select>
        </div>
        <h5>비밀번호</h5>
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          autoComplete="off"
        />
        <h5>비밀번호 확인</h5>
        <input
          type="password"
          name="password"
          placeholder="비밀번호확인"
          autoComplete="off"
        />
      </div>

      <div className="sing-up-btn">
        <button
          type="submit"
          style={{
            width: "100px",
            height: "30px",
            color: "black",
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Singup;
