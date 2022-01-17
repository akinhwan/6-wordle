import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">6 letter Wordle</header> */}
      <div className="Grid">
        {[...Array(36)].map((_, i) => (
          <div className="Cell">{i}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
