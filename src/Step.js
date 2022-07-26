import { useEffect } from 'react';
import Logo from '../src/logo.png';
import './App.css';
import StepOptions from './composant/Options/StepOptions';
import { useSelector } from 'react-redux';



function Step() {
  const model = useSelector(state => state.configurator.steps[0]);
  const totalPrice = useSelector(state => state.configurator.price);

  return (
    <div className="Step">
      <header className="Step-header">
        <img className="topLogo" src={Logo}  alt="logo"></img>
        <h2>LEGENDE</h2>
        <StepOptions step={model}/>
        Prix total : {totalPrice} €
      </header>
    </div>

  );
}

export default Step;
