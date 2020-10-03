import React from 'react';
import './App.css';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';

function App() {
  return (
    <div className="App">
      <LoginHooks />
      <LogoutHooks />
    </div>
  );
}

export default App;
