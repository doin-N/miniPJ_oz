import "./App.css";
import MovieCard from "./component/MovieCard";
import MovieDetail from "./component/MovieDetail";
import { Route, Routes } from "react-router-dom";
import axios from "./api/axios";
import { useEffect, useState } from "react";
import NavBar from "./component/NavBar";

const App = () => {
  //메인페이지에 가져갈 정보
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //여기에 있는 로직이 이상하면 캐치가 잡는다
        const response = await axios.get("/movie/popular");
        //console.log(response.data.results);
        setResult(response.data.results);
      } catch (error) {}
    };
    fetchData();
    //페이지를 처음 열었을떄 함수 실행
  }, []);

  const Movies = () => {
    return (
      <div id="abc">
        {/*Movie제이슨에서 results의 속성을 통해 배열을 가져온 후 map함수 실행 (movie에 대해 특정 작업을 수행하겠다. => {*/}
        {result.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            average={movie.vote_average}
            poster={movie.poster_path}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        {/* elemen 는 / 주소로 왔을때 보여주고 싶은 컴포넌트 */}
        {/*  path="/details" 기본 주소에서 넘어가는 페이지의 이름 적어주기 */}
      </Routes>
    </>
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
