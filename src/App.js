import React from 'react';
import headshot from './headshot.JPG';

const cvLocation = 'https://drive.google.com/open?id=1LYrnSiwuEXOLIoK16zSH4s3c6Ts6sQfaBsCRFnZWNVgdeIWl0HAw85ze-L7raGjI71cBmvB6OUuDlfEL';
const productionTitle = 'Balm in Gilead';
const writer = 'Lanford Wilson';
const director = 'Joseph Blatchley';
const character = 'Rake';
const theatre = 'Silk Street Theatre';
const eveningShows = 'March 24th, 25th, 27th, 28th, 29th';
const matineeShows = 'March 27th, 29th';

const App = () => (
  <div className="container-fluid">
    <div className="row">
      <Headshot />
      <Information />
    </div>
  </div>
);


const Headshot = () => (
  <div className="col-md-6">
    <img className="img-fluid" src={headshot} alt="Will de Renzy-Martin" />
  </div>
);

const Information = () => (
  <div className="col-md-6">
    <div className="container">
      <div className="jumbotron">
        <h3> Will de Renzy-Martin </h3>
        <p className="lead">
          Graduating Actor, Spotlight Pin: <a href="https://www.spotlight.com/interactive/cv/3811-6724-2735"> 3811-6274-2735 </a>
        </p>
        <p>
          I am an actor in my final year at the <em>Guildhall School of Music and Drama.</em>
        </p>
        <p>
          In my next production, &quot;{productionTitle}&quot; by {writer}, directed
          by {director}, I will be playing {character}.
        </p>
        <p>
          Performances in the {theatre} on : <br />
          {eveningShows} at 19:30, <br />
          and {matineeShows} at 14:00
        </p>
        <TicketInfo />
        <ConstructionDisclaimer />
      </div>
    </div>
  </div>
);

const TicketInfo = () => (
  <p>
    For ticket information, please contact <a href="mailto:drama@gsmd.ac.uk">drama@gsmd.ac.uk</a>
  </p>
);

const ConstructionDisclaimer = () => (
  <p>
    This website is currently under construction,
    but feel free to take a look at my showreel, or browse my <a href={cvLocation}> CV</a>
  </p>
);

export default App;
