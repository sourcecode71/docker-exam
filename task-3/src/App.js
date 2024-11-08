import React from 'react';
import logo from './logo.svg'; // Import the logo
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          It is simple docker testing for react project
        </p>
        <footer>
          <p>&copy; 2024 Mostafiz Tech Blog</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
