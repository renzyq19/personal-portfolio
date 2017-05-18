import React from 'react';

const HeadshotCarousel = () => (
  <div id="headshotCarousel" height="350rem" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#headshotCarousel" data-slide-to="0" className="active" />
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active height-responsive" >
        <div className="carousel-caption d-none d-md-block darkened-background">
          <h3> Will de Renzy-Martin </h3>
          <p>
            Graduating Actor, Spotlight Pin: <a className="card-link" href="https://www.spotlight.com/interactive/cv/3811-6724-2735"> 3811-6274-2735 </a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HeadshotCarousel;
