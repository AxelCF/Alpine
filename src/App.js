import Logo from '../src/logo.png';
import './App.css';
import StepOptions from './composant/Options/StepOptions';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="topLogo" src={Logo}  alt="logo"></img>
        <h2>LEGENDE</h2>
        <StepOptions/>
      </header>
    </div>

  );
}

export default App;
