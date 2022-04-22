// import logo from './logo.svg';
import './App.css';
import {useState,useContext,useRef,useEffect} from 'react';
// import TwoWayBinding from './components/twoWayBinding/testTwoWayBinding';
import TestUseEffect from './components/useEffect/UseEffect';
import UseContext from './components/useContext/UseContext';


function App() {  
  const [mounted,setMounted] = useState(false);
  const resources = ['posts', 'comments', 'albums', 'photos','todos','users']
  const createUseRef = useRef()
  console.log(createUseRef )
  return (
    <div className="App" ref={createUseRef}>
      <button onClick = {()=> {setMounted(!mounted)}}>
        {mounted ? 'Unmount' : 'Mount'}
      </button>
      <div></div>
        {mounted && <TestUseEffect resources = {resources}/>  }
        <UseContext/>
    </div>
  );
}

export default App;
