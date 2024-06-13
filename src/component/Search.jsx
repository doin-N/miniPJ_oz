import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Search.css";
import axios from "../api/axios";
import { useDebounce } from "../hooks/useDebounce";

// 검색창 컴포넌트
const Search = () => {
  //추출한 검색어로 api에 요청보내고 결과가 바뀔때 마다 영화 데이터 가져오기 (가져온 데이터(검색결과)는 statefh 로 기억하게 한다.)
  const [movieSearch, setMovieSearch] = useState([]); //무비데이터를 여기에 저장하자

  // const location = useLocation();
  //   console.log(location);
  const navigate = useNavigate();

  // 사용자가 적은 검색어를 단어만 추출하기?
  const useQuery = () => {
    //useQuery함수가 불려지면
    return new URLSearchParams(useLocation().search);
    //URLSearchParams는 주소창에 있는 쿼리스트링을 파싱해주는 객체 _ 객채오 반환해준다 { q: 12345 } 이렇게
    //useLocation()은 현재 주소를 가져오는 함수
    //.search
  };

  let query = useQuery(); //{ (키값)q: 12345(벨류)) }
  const searchQs = query.get("q"); //사용자가 입력한 검색어만 가져와서 searchQs에 넣기
  const searchDebounceQuery = useDebounce(query.get("q"), 1000);
  //console.log(searchDebounceQuery);

  // 데이터입력시 검색어를 바로바로 리턴하는게 아니고 설정해둔 시간 만큼 가지고 있다가 리턴해주는 지연시간 관리하는
  useEffect(() => {
    // console.log(`유즈이펙트 작동`);
    if (searchDebounceQuery) {
      movieSearchRes(searchDebounceQuery);
    }
  }, [searchDebounceQuery]);
  //얘가 변하면 바뀔때만 유즈이팩트를 실행한다
  console.log();

  // 영화 정보가져오는 함수
  const movieSearchRes = async (searchQs) => {
    try {
      const response = await axios.get(
        `/search/multi?include_adult=false&query=${searchQs}`
      );
      console.log(response);
      setMovieSearch(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  //
  if (movieSearch.length > 0) {
    //검색어를 입력했을때 나온 결과가 있으면
    console.log(movieSearch); //어떤데이터가 들어왔는지 확인
    return (
      <section className="search-all">
        {movieSearch.map((movie) => {
          //무비서치데이터에 맵을 돌려서 정보를 보고
          if (movie.backdrop_path !== null) {
            //만약 무비 backdrop_path가 null이 아니라면
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            // 무비이미지유알엘에 주소+포스터 주소 붙혀줘
            const movieTitle = movie.title ? movie.title : movie.name;

            //화면에 보여주는 부분들
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => navigate(`/details/${movie.id}`)}
                  className="search-movie-detail-page"
                >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="search-movie-poster"
                  />
                </div>
                <p className="searchPage-movie-poster-title">{movieTitle}</p>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className="no-search-all">
        <div className="no-search-box">
          <p>찾고자하는 검색어 {searchQs}에 맞는 영화가 없습니다.</p>
        </div>
      </section>
    );
  }
};

export default Search;
