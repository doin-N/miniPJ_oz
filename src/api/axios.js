import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  //
  params: {
    //베이스 유알에에 붙이는 기본 정보
    api_key: process.env.REACT_APP_TMDB_API_KEY, //env파일 임폴트 하기 찾아보기
    language: "ko-KR",
    page: "1",
  },
});

// instance.get('/search/movie', {
//     params: {
//         query: 'Inception'
//     }

// })
// .then()

export default instance;
