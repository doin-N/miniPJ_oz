import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  // 1. 검색창 내용을 기억하게 할 상태
  const [movieSearchValue, setMovieSearchValue] = useState("");
  //경로
  const navigate = useNavigate();

  const handleChange = (e) => {
    setMovieSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
    ///search?q=${여기에movieSearchValue 이걸넣어도 되는데 안되는 이유는 한글이여서}
    //q에 해당하는 변수값이 {} 여기안에 들은거
    //링크는 직관적 조건이 없을 때 보기 편하고 네비게이트는 조건이 생겼을때 하는게 더 낫다
  };

  return (
    <>
      <NavAll>
        <AllBox>
          <LogoBox>
            <Link to={`/`}>
              <NavLogo />
            </Link>
          </LogoBox>

          <Input
            type="text"
            className="nav_search_input"
            //2. 입력한 내용을 기억하자 어떻게 기억하지? 상태를 관리해서 위에 state로 상태 만들어줌 3. 그값을 넣어주고
            value={movieSearchValue}
            //4. 입력된 값으로 어떻게 바꿀까?
            onChange={handleChange}
            // 인풋테그 안에 있는 무언가가 바뀔때
            //5. 체인지 이벤트가 발생했을때 검색창에 값을 벨류값에 넣어줘
            placeholder="검색할 영화 제목을 입력해 주세요"
          />
          <BtnBox>
            <Link to={`/singup`}>
              <JoinBut>회원가입</JoinBut>
              <JoinIcon />
            </Link>

            <Link to={`/login`}>
              <LoginBut>로그인</LoginBut>
              <LoginIcon />
            </Link>
          </BtnBox>
        </AllBox>
      </NavAll>
    </>
  );
};
export default NavBar;

// nav바 전제
const NavAll = styled.div`
  position: fixed;
  top: 0; //화면 상단에 빈틈없이 붙이기 위해 0으로 설정
  background-color: black;
  width: 100%;
  height: 80px;
  z-index: 100; // 스크롤을 내리면 다른요소들이 겹쳐서 맨위에 나타나게 함 큰숫자가 맨앞
`;

// 요소들 전체 박스
const AllBox = styled.div`
  margin-left: 1rem;
  margin-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//로고박스
const LogoBox = styled.div``;

// 로고
const NavLogo = styled.img.attrs({
  src: "/pngwing.com.png",
  alt: "사진",
})`
  width: 80px;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 20px;
`;

//검색버튼
const Input = styled.input`
  width: 200px;
  height: 30px;
`;

//회원가입버튼
const JoinBut = styled.button`
  width: 100px;
  height: 30px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const JoinIcon = styled.img.attrs({
  src: "/pngwing.com.png",
  alt: "사진",
})`
  width: 80px;
`;

//로그인버튼
const LoginBut = styled.button`
  width: 100px;
  height: 30px;
  @media (max-width: 767px) {
    display: none;
  }
`;

const LoginIcon = styled.img.attrs({
  src: "/pngwing.com.png",
  alt: "사진",
})`
  width: 80px;
`;
