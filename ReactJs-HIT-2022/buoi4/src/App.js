import logo from './logo.svg';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Link to ="/login">
          <button>login</button>
        </Link>
        <Link to ="/">
          <button>trang chu</button>
        </Link>
        <Link to ="/signup">
          <button>signup</button>
        </Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
