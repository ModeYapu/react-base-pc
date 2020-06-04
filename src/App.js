import React from 'react';
import logo from './logo.svg';
import './App.css';

//动态路由
import DynamicRoute from './route';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload....
        </p>
      </header>

        <a href="#/">Home</a> <br/>
        <a href="#/user/login?val=123&ret=bingqing">login</a> <br/>
        <a href="#/user/forget-pwd?val=4567&ret=bingqing">forget-pwd</a> <br/>

      <DynamicRoute>
      </DynamicRoute>

    </div>
  );
}

export default App;
