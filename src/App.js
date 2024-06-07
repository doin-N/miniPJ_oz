import "./App.css";
import MovieCard from "./component/MovieCard";
import MovieDetail from "./component/MovieDetail";
import { Outlet, Route, Routes } from "react-router-dom";
import axios from "./api/axios";
import { useEffect, useState } from "react";
import NavBar from "./component/NavBar";
import Singup from "./component/Singup";
import Login from "./component/Login";
import Search from "./component/Search";

const App = () => {
  //메인페이지에 가져갈 정보 영화 정보
  const [result, setResult] = useState([]); //컴포넌트가 마운트될때 (돔에 추가되고 렌더링될떄) 한번 실행

  //컴포넌트가 처음 랜더링 될 때 한번만 실행되는 함수
  useEffect(() => {
    const fetchData = async () => {
      //  async는 선언된 변수를 비동기(동시에 일어나지 않는) 함수로 만듬
      try {
        //여기에 있는 로직이 이상하면 캐치가 잡는다

        const response = await axios.get("/movie/popular");
        //axios.get("/movie/popular") 데이터 가져오기
        //그리고 데이터 가져오는 작업이 끝날때까지 await(기다리기)했다가 그 작업이 끝나면 변수선언
        // console.log(response);
        setResult(response.data.results);
        //  useState의  result 상태로 설정
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    //페이지를 처음 열었을때 함수 실행
  }, []);
  //[]의존성 배열 빈배열이면 1번만 실행

  const Movies = () => {
    return (
      <div id="abc">
        {/* result 상태에 map으로 movie데이터 가져오기 */}
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

  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        {/* outlet */}
      </>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Movies />} />
          <Route path="/details/:id" element={<MovieDetail />} />
          {/* elemen 는 / 주소로 왔을때 보여주고 싶은 컴포넌트 */}
          {/*  path="/details" 기본 주소에서 넘어가는 페이지의 이름 적어주기 */}
          {/* /details/:id 이 주소가 확인되면 화면을 보여줄게 */}
          <Route path="/singup" element={<Singup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </>
  );
};

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
