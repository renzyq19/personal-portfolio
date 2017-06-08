import React from 'react';
import voicereel from './voicereel.mp3';
import HeadshotCarousel from './HeadshotCarousel';

const cvLocation = 'https://drive.google.com/open?id=1LYrnSiwuEXOLIoK16zSH4s3c6Ts6sQfaBsCRFnZWNVgdeIWl0HAw85ze-L7raGjI71cBmvB6OUuDlfEL';
const productionTitle = 'Crazy for You';
const director = 'Martin Connor';
const character = 'Eugene Fodor';
const theatre = 'The Silk Street Theatre';

const Home = () => (
  <div className="container-fluid">
    <div className="justify-content-center row">
      <div className="col-md-8">
        <HeadshotCarousel />
      </div>
    </div>
    <div className="justify-content-center row">
      <div className="col-md-6">
        <Information />
      </div>
    </div>
  </div>
);

const Information = () => (
  <div className="card">
    <div className="card-block">
      <p className="card-text">
        I am an actor in my final year at the <em>Guildhall School of Music and Drama.</em>
      </p>
      <p className="card-text">
        My next production will be &quot;{productionTitle}&quot; directed by {director}, where
        I will be playing {character}.
      </p>
      <p className="card-text">
        Performances in {theatre}<br />24th - 12 Jul 17 / 14:00, 19:30
      </p>
    </div>
    <div className="card-block">
      <p className="card-text">
        For ticket information,
        please contact <a href="mailto:drama@gsmd.ac.uk">drama@gsmd.ac.uk</a>
      </p>
    </div>
    <div className="card-block">
      <p className="card-text">
        Voice Reel
      </p>
      <audio src={voicereel} controls />
    </div>
    <div className="card-footer">
      <p className="card-text">
        This website is currently under construction,
        but feel free to take a look at my showreel, or browse my <a href={cvLocation}> CV</a>
      </p>
    </div>
  </div>
);

export default Home;
