import logo from './logo.svg';
import './App.css';
import HeaderUserProps from './component/propsType and defaultProps/HeaderUserProps';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <HeaderUserProps name='chung ta cua hiện tại nè '/>
    </div>
  );
}

export default App;
