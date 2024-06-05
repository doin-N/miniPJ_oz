import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Search.css";

import axios from "../api/axios";

const Search = () => {
  // const location = useLocation();
  //   console.log(location);
  const navigate = useNavigate();
  // 사용자가 적은 검색어를 단어만 추출하기?
  const useQuery = () => {
    //useQuery함수가 불려지면
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchQs = query.get("q"); //사용자가 입력한 검색어만 가져와서 searchQs에 넣기
  //console.log(searchQs);

  //추출한 검색어로 api에 요청보내고 결과가 바뀔때 마다 영화 데이터 가져오기 (가져온 데이터(검색결과)는 statefh 로 기억하게 한다.)
  const [movieSearch, setMovieSearch] = useState([]); //무비데이터를 여기에 저장하자

  useEffect(() => {
    console.log(`유즈이펙트 작동`);
    if (searchQs) {
      movieSearchRes(searchQs);
    }
  }, [searchQs]);
  //얘가 변하면 유즈이팩트를 실행한다

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

  // 이제 화면에 보여줘 보자
  if (movieSearch.length > 0) {
    //무비서치안의 배열의 요소가 0보다 크면
    // console.log(movieSearch);//어떤데이터가 들어왔는지 확인
    return (
      <section className="search-all">
        {movieSearch.map((movie) => {
          //무비서치데이터에 맵을 돌려서 정보를 보고
          if (movie.backdrop_path !== null) {
            //만약 무비 backdrop_path가 null이 아니라면
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            // 무비이미지유알엘에 주소+포스터 주소 붙혀줘

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
