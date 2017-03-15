import React from 'react';
import headshot from './headshot.JPG';
import NavBar from './NavBar';
import './App.css';

const name = 'Will de Renzy-Martin';
const cvLocation = 'https://drive.google.com/open?id=1LYrnSiwuEXOLIoK16zSH4s3c6Ts6sQfaBsCRFnZWNVgdeIWl0HAw85ze-L7raGjI71cBmvB6OUuDlfEL';
const productionTitle = 'Balm in Gilead';
const writer = 'Lanford Wilson';
const director = 'Joseph Blatchley';
const character = 'Rake';
const theatre = 'Silk Street Theatre';
const eveningShows = 'March 24th, 25th, 27th, 28th, 29th';
const matineeShows = 'March 27th, 29th';

const App = () => (
  <div>
    <NavBar name={name} />
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
);

const Information = () => (
  <div className="card">
    <div className="card-block">
      <p className="card-text">
        I am an actor in my final year at the <em>Guildhall School of Music and Drama.</em>
      </p>
      <p className="card-text">
        In my next production, &quot;{productionTitle}&quot; by {writer}, directed
        by {director}, I will be playing {character}.
      </p>
      <p className="card-text">
        Performances in the {theatre} on : <br />
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
  videoID: React.PropTypes.number,
};

const HeadshotCarousel = () => (
  <div id="headshotCarousel" height="350rem" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#headshotCarousel" data-slide-to="0" className="active" />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active height-responsive" >
        <div className="carousel-caption d-none d-md-block darkened-background">
          <h3> {name} </h3>
            <p>
              Graduating Actor, Spotlight Pin: <a className="card-link" href="https://www.spotlight.com/interactive/cv/3811-6724-2735"> 3811-6274-2735 </a>
            </p>
        </div>
      </div>
    </div>
  </div>
);

export default App;
