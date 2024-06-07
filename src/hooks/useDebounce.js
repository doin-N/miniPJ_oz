import { useState, useEffect } from "react";
// useDebounce는 입력값의 변화를 인지하여 일정시간 대기 후 그 변화를 처리하는 커스텀 훅

// 입력값이 변경될때 마다 즉시 작없을 수행하지 ㅇ낳고 대기시간 이후 작업수행
// 사용자 경험 향상과 불필요한 작업방지효과

export const useDebounce = (value, delay) => {
  // (실시간으로 변하는값으로 사용자가 입력한 값, 대기시간 입력값이 변경된 후에 대기하는 시간)

  //관리할 상태를 하나 만들고
  const [debValue, setDebValue] = useState(value);
  //

  useEffect(() => {
    //settimeout 자바스크립트 내장함수로 일정시간 지난 후 작업실행하는 타이머 역활
    const handler = setTimeout(() => {
      setDebValue(value);
      // value값을 debValue에 넣는다
    }, delay);

    return () => {
      //setTimeout을 없애주기 위해서 사용
      //이전타임에 적은 검색어를 다 적기전에 다른 검색어를 썻을때
      clearTimeout(handler);
    };
  }, [value, delay]);
  //value와 delay가 변경될떄만 useEffect실행

  return debValue;
  //변경된 값을 debValue에 넣는다
};
