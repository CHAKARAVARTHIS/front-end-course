import logo from './logo.svg';
import './App.css';
import Chakara from './chakara';
import Anyname from './Chakara';
function App() {
  return (
    <div className="App">
      <Chakara/>
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Anyname/>
      <Anyname/>
    </div>
  );
}

export default App;
