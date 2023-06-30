import logo from './logo.svg';
import './App.css';

let posts = "오늘의 일기1"
let date = "2023-06-30"

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        <div>장문성의 개발일지</div>
      </div>
      <div className="list">
      <h4>{posts}</h4>
      <p>6월 30일 발행</p>
      </div>
     
    </div>
  );
}

export default App;
