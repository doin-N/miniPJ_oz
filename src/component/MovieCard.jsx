/*
1. 컴포넌트 생성
2. 여기는 무비카드의 포스터, 제목, 평점이 표시되는 곳
*/

import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import axios from "../api/axios";

function MovieCard({ id, title, average, poster }) {
  //[현재 state, state를 변경하기 위한 함수] = [state의 초기값]
  //const [cards, setCard] = useState([]);
  //MovieCard 함수를 생성후 중괄호 {}안에 있는 코드를 실행해줘
  return (
    <div className="movie-map">
      {
        // 키값을 주지 않으면 콘솔에 에러뜸 키값은 리액트에게 각 영화를 식별할수 있는 고유값으로
        // 새영화가 추가 삭제될때 리액트가 효율적으로 감지하고 렌더링 할수 있게 함
        <div className="movie-map-box" key={id}>
          {/* 얘를 눌렀을때 이주소로 이동 */}
          <Link to={`/details/${id}`}>
            {" "}
            <img
              src={`https://image.tmdb.org/t/p/w400${poster}`}
              alt={title}
            />{" "}
          </Link>
          {/* img의 src 경로에서 사진 불러오기 {https주소는 공식문서에서 확인가능}
                        {}자바스크립트 표현식, 현재 반복되는 영화 객체의 포스터 이미지경로
                        <div className='movie-map-box' key={movie.id}
                         style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w500${ movie.poster_path}`}}
                        이렇게도 사용가능
                       >*/}
          <div className="movie-map-box-title">{title}</div>
          {/* 영화 제목 가져오기 */}
          <div className="movie-map-box-average">{`평점 ${average}`}</div>
          {/* 영화 평점 가져오기*/}
        </div>
      }
    </div>
  );
}

export default MovieCard;
