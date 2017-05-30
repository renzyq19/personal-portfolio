import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import HeadshotCarousel from './HeadshotCarousel';
import './App.css';

const name = 'Will de Renzy-Martin';
const cvLocation = 'https://drive.google.com/open?id=1LYrnSiwuEXOLIoK16zSH4s3c6Ts6sQfaBsCRFnZWNVgdeIWl0HAw85ze-L7raGjI71cBmvB6OUuDlfEL';
const productionTitle = 'Crazy for You';
const director = 'Martin Connor';
const character = 'Eugene Fodor';
const theatre = 'The Silk Street Theatre';
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
        My next production will be &quot;{productionTitle}&quot;, directed by {director}.
        I will be playing {character}.
      </p>
      <p className="card-text">
        Performances in {theatre}
        24th - 12 Jul 17 / 14:00, 19:30
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
