import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {

  let [title, setButton] = useState(['일기쓰는 앱을 만들까', '포트폴리오를 만들까', '그냥영화사이트?']);
  let [따봉, 변경용] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); //ui의 현재 상태를 state로 저장한다.
  let [모달제목, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      <div className="black-nav">
        <h4>장문성의 개발 일지</h4>
      </div>

      <button onClick={() => {
        let desc = [...title];
        desc.sort();
        setButton(desc)
      }}>가나다순정렬</button>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '여자코트 추천';
        setButton(copy)
      }}> 수정버튼 </button>


      {
        title.map(function (a, i) {
          return (<div className="list" key={i}>
            <h4 onClick={() => { setModal(true); setTitle(i); }} > {title[i]}</h4>
            <span onClick={() => {
              let copy = [...따봉]; copy[i] = copy[i] + 1; 변경용(copy)
            }}>❤️</span> {따봉[i]}
            <p>7월 1일 발행</p>
            <button onClick={()=>{let sak = [...title]; sak.splice(i,1); setButton(sak);}}>삭제</button>
          </div>)
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value)
      }} ></input>
      <button onClick={() => {
        let newTitle = [...title];
        newTitle.unshift(입력값);
        setButton(newTitle)
      }}>글발행</button>
      {modal == true ? <Modal 모달제목={모달제목} title={title} 수정버튼={setButton} /> : null}

    </div >
  );
}


//컴포넌트
function Modal(props) {
  return (
    <div className='modal'>
      <h4> {props.title[props.모달제목]} </h4>
      <p>date</p>
      <p>detail contents</p>
      <button onClick={() => { props.수정버튼(['여자코트']) }}>수정버튼</button>
    </div>
  )
}

export default App;
