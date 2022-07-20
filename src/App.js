import alpine from './image alpine/sources-homepage/A110/Alpine-A110-1.jpg';
import logo from './image alpine/sources-homepage/logo/logo-white.png';
import demo from './image alpine/sources-homepage/A110/Presentation_desktop-1.png'
import legende from './image alpine/sources-homepage/versions/ALPINE-LEGENDE-1.png'
import pure from './image alpine/sources-homepage/versions/ALPINE-PURE-1.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';
import ReadMoreReact from 'read-more-react';
import React from 'react';
import './App.css';

function App() {
  const model = useSelector(state => state.configurator.step[1]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
        <img src={alpine} className="alpine" alt="alpine" />
        <p><DemoClass/></p>
        <h1>Configurez votre ALPINE</h1>
        <img src={demo} className="alpine" alt="car" />

      <div className='container'>
        <Card className='card' style={{ background: 'none' }}>
          <Card.Img variant="top" src={legende} />
          <Card.Body>
            <Card.Title>LEGENDE</Card.Title>
          </Card.Body>
        </Card>

        <Card className='card' style={{ background: 'none' }}>
          <Card.Img variant="top" src={pure} />
          <Card.Body>
            <Card.Title>PURE</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>


);
}

class DemoClass extends React.Component {
 
  render() { 
      return (
          <ReadMoreReact text={"Fondée en 1955, Alpine s’est affirmée au fil des ans avec ses voitures de sport à la française. En 2018, la marque présente la nouvelle A110, une voiture de sport fidèle aux principes intemporels d’Alpine en matière de compacité, de légèreté, d'agilité et de plaisir de conduite. En 2021, Alpine Cars, Renault Sport Cars et Renault Sport Racing se réunissent sous la bannière Alpine. Elle devient ainsi la marque à la pointe de l’innovation sportive du Groupe Renault, bénéficiant de l’héritage et du savoir-faire de son usine historique de Dieppe ainsi que de la maîtrise de l’ingénierie des équipes de Formule 1 et de Renault Sport Cars. Un « garage de rêve » composé de voitures de sport électriques, exclusives et futuristes, génératrices de rêve mais destinées à la vraie vie, constituera bientôt la gamme de la marque."}
              min={308}
              ideal={308}
              max={600}
              readMoreText="cliquez ici pour en savoir plus"/>
      ) 
  }
}

export default App;
