import { useEffect } from 'react';
import Logo from '../src/logo.png';
import './App.css';
import StepOptions from './composant/Options/StepOptions';
import { useSelector } from 'react-redux';



function Step() {
  const steps = useSelector(state => state.configurator.steps);
  const model = useSelector(state => state.configurator.currentModel);
  const currentStep = useSelector(state => state.configurator.currentStep);

  return (
    <div className="Step">
      <header className="Step-header">
        <img className="topLogo" src={Logo}  alt="logo"></img>
        <h2>{model}</h2>
        <StepOptions step={steps[currentStep]}/>
      </header>
    </div>

  );
}

export default Step;
