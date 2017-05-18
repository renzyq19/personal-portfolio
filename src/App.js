import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import HeadshotCarousel from './HeadshotCarousel';
import './App.css';

const name = 'Will de Renzy-Martin';
const cvLocation = 'https://drive.google.com/open?id=1LYrnSiwuEXOLIoK16zSH4s3c6Ts6sQfaBsCRFnZWNVgdeIWl0HAw85ze-L7raGjI71cBmvB6OUuDlfEL';
const productionTitle = 'Notoriously Abused';
const director = 'Richard Goulding';
const character = 'Caliban and Brabantio';
const theatre = 'Rehearsal Room 3 of Milton Court';
const eveningShows = 'May 24th, 25th, 26th, and 27th';
const matineeShows = 'May 25th, and 27th';
const links = [
  'Home',
  'News',
  'Photos',
];

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar name={name} links={links} />
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
    </div>
  </BrowserRouter>
);

const Information = () => (
  <div className="card">
    <div className="card-block">
      <p className="card-text">
        I am an actor in my final year at the <em>Guildhall School of Music and Drama.</em>
      </p>
      <p className="card-text">
        My next production will be &quot;{productionTitle}&quot;,
        a compilation of 6 Shakespeare plays, directed
        by {director}. I will be playing {character}.
      </p>
      <p className="card-text">
        Performances in {theatre} on : <br />
        {eveningShows} at 19:30, <br />
        and {matineeShows} at 14:00
      </p>
    </div>
    <div className="card-block">
      <p className="card-text">
        For ticket information,
        please contact <a href="mailto:drama@gsmd.ac.uk">drama@gsmd.ac.uk</a>
      </p>
    </div>
    <VimeoFrame videoID={189426939} />
    <div className="card-footer">
      <p className="card-text">
        This website is currently under construction,
        but feel free to take a look at my showreel, or browse my <a href={cvLocation}> CV</a>
      </p>
    </div>
  </div>
);

const VimeoFrame = props => (
  <iframe
    src={`https://player.vimeo.com/video/${props.videoID}`}
    width="100%"
    height="350rem"
    frameBorder="0"
    allowFullScreen=""
  />
);

VimeoFrame.propTypes = {
  videoID: PropTypes.number,
};


export default App;
