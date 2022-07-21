import logo from './image alpine/sources-homepage/logo/logo.png';
import flecheGreen from './image alpine/sources-homepage/logo/flecheGreen.png';
import flecheYellow from './image alpine/sources-homepage/logo/flecheYellow.png';
import ShowCar2 from './image alpine/configurateur/modele/legende/ShowCar2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StepPage.css';

function StepPage() {
  return (
    <div className='StepPage'>
      <div className='header'>
      <header className="App-header">
        <img className="logoAlpine" src={logo} alt="logo" />
      </header>
      <h1>LEGENDE</h1>
      <div className='progressStep'>
        <div className='State'>
          <div className='NumberStep'>1</div>
          <img className='SingleProgressStep' src={flecheGreen} alt="flecheGreen"/>
        </div>
        <div className='State'> 
          <div className='NumberStep'>2</div>
          <img className='SingleProgressStep' src={flecheYellow} alt="flecheYellow"/>
        </div>
        <div className='State'> 
          <div className='NumberStep'>3</div>
          <img className='SingleProgressStep' src={flecheYellow} alt="flecheYellow"/>
        </div>
        <div className='State'> 
          <div className='NumberStep'>4</div>
          <img className='SingleProgressStep' src={flecheYellow} alt="flecheYellow"/>
        </div>
        <div className='State'> 
          <div className='NumberStep'>5</div>
          <img className='SingleProgressStep' src={flecheYellow} alt="flecheYellow"/>
        </div>
        <div className='State'> 
          <div className='NumberStep'>6</div>
          <img className='SingleProgressStep' src={flecheYellow} alt="flecheYellow"/>
        </div>
      </div>
      </div>
      <div className='ShowCar'>
        <img className="ShowCar2" src={ShowCar2} alt="modele" />
      </div>

    </div>
     
    
);
}


export default StepPage;
