import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>First React App</h1>
      <p>React is a javascript library for building user interfaces</p>
      <Add></Add>
    </div>
  );
}

function Add() {
  return (
    <div>
      <h5>Second heading of this website</h5>
      <p>3 steps to install a react app</p>
    </div>
  );
}

export default App;
