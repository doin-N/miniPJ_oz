import React, { useState, useEffect } from "react";
import "./MovieDetail.css";
import MovieDeta from "../movieDetailData.json";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
{
  /* MovieDeta에서 정보를 가져와서 필요한 태그에 내려주기 (더미자료라 가능) */
}

function MovieDetail() {
  //hooks중 하나로 파라미터 값을 넘겨받은 페이지에서 사용할수 있게 해주는것
  // 동적인내용을 바꿀때 주소창에서 씀
  const { id } = useParams();
  console.log(id);

  const [detailResult, setDetailResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //여기에 있는 로직이 이상하면 캐치가 잡는다
        const response = await axios.get(`/movie/${id}`);
        console.log(response.data);
        setDetailResult(response.data);
      } catch (error) {}
    };
    fetchData();
  }, [id]);

  //에러처리
  if (!detailResult) {
    return <div>loading...</div>;
  }

  return (
    <div className="movie-detail">
      <div className="movie-detail-img">
        <img
          src={`https://image.tmdb.org/t/p/w500/${detailResult.poster_path}`}
        />
      </div>

      <div className="movie-detail-introduce">
        <div className="movie-detail-introduce-a">
          <div className="movie-detail-title"> {detailResult.title}</div>
          <div className="movie-detail-average">
            {" "}
            평점: {detailResult.vote_average}
          </div>
        </div>

        <div className="movie-detail-genres">
          {" "}
          장르 : {detailResult.genres.map((genre) => genre.name).join(", ")}
        </div>
        {/* 맵을 쓰면 배열을 새로 만든다 배열을 문자열로 바꾸기 위해 조인을 쓴다.  태그로 만드는법 해보기 */}

        <div> 줄거리 {detailResult.overview} </div>
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
