import React from "react";
import "./MovieDetail.css";
import MovieDeta from "../movieDetailData.json";
{
  /* MovieDeta에서 정보를 가져와서 필요한 태그에 내려주기 */
}

function MovieDetail() {
  return (
    <div className="movie-detail">
      <div className="movie-detail-img">
        <img src={`https://image.tmdb.org/t/p/w500/${MovieDeta.poster_path}`} />
      </div>
      <div className="movie-detail-introduce">
        <div className="movie-detail-introduce-a">
          <div className="movie-detail-title"> {MovieDeta.title}</div>
          <div className="movie-detail-average"> {MovieDeta.vote_average}</div>
        </div>
        <div className="movie-detail-genres">
          {" "}
          장르 : {MovieDeta.genres.map((genre) => genre.name).join(", ")}
        </div>

        {/* 맵을 쓰면 배열을 새로 만든다
  배열을 문자열로 바꾸기 위해 조인을 쓴다.
  태그로 만드는법 해보기
  
  </div> */}

        <div> 줄거리 {MovieDeta.overview} </div>
      </div>
    </div>
  );
}

// 장르를 표시할 영역 선택
// var genresContainer = document.getElementById("genres");

// 장르 배열을 순회하며 태그 생성
// data.genres.forEach(function(genre) {
//     var genreTag = document.createElement("span");
//     genreTag.textContent = genre.name;
//     genresContainer.appendChild(genreTag);
// })

export default MovieDetail;
