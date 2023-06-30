import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  let [title, button] = useState(['일기쓰는 앱을 만들까', '포트폴리오를 만들까', '그냥영화사이트?']);
  let [따봉, 변경용] = useState(0);

  function 함수() {
    변경용(따봉 + 1)
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>장문성의 개발 일지</h4>
      </div>

      <button onClick={()=>{
        let desc = [...title];
        desc.sort(); 
        button(desc)
        console.log(desc)
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...title];
        copy[0] ='여자코트';
        button(copy)
      }}> 수정버튼 </button>

      <div className="list">
        <h4>{title[0]} </h4><span onClick={함수}>❤️</span> {따봉}
        <p>7월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>7월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>7월 1일 발행</p>
      </div>

    </div>
  );
}

export default App;
