import logo from './logo.svg';
import './App.css';
import Test from './Test.jsx'

function App() {
  const data = 'Hello bạn nhỏ'
  return (
    <div className="App">
      <Test text={data}></Test>
      <Test text={data}/>
    </div>
  );
}

export default App;
