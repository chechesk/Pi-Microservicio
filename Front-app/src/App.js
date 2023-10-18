import logo from './logo.svg';
import './App.css';

const img = "https://images.immediate.co.uk/production/volatile/sites/3/2017/08/112739.gif?quality=90&fit=544,362"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <p>
          Proyecto de Microservicio 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go APP
        </a>
      </header>
    </div>
  );
}

export default App;
