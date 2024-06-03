import "./App.css";
import MovieCard from "./component/MovieCard";
import MovieDetail from "./component/MovieDetail";
import Movie from "./movieListData.json";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Movies />} />
        {/* */}
        <Route path="/details" element={<MovieDetail />} />
        {/*  path="/details" 기본 주소에서 넘어가는 페이지의 이름 적어주기 */}
      </Routes>
    </>
  );
};

const Movies = () => {
  return (
    <div id="abc">
      {Movie.results.map((movie) => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          average={movie.vote_average}
          poster={movie.poster_path}
        />
      ))}
    </div>
  );
};

{
  /* 디테일 페이지에 pors로 제이슨파일 정보 보내주기 */
}

export default App;

{
  /*const movies = () => {
  return (
    <div className='movie-map'>
    {
        Movie.results.map( movie => (
         
            <MovieCard id={movie.id} 
            title={movie.title}
            average={movie.vote_average}
            poster={movie.poster_path} /> ) )
    }
 </div>

  )
}*/
}
