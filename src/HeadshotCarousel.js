/* eslint-disable */
import React from 'react';
import Video from './Video';
import showreel from './showreel.mp4';

class HeadshotCarousel extends React.Component {
  constructor(){
    super();
    this.carouselID = 'headshotCarousel';
    this.togglePlay = this.togglePlay.bind(this);
    this.state = {
      videoVisible: false,
    }
  }

  componentDidMount() {
    this.video = document.querySelector('video');
    this.video.addEventListener('click', this.togglePlay);
    this.carousel = $(this.carouselID);
    this.carousel.on('slide.bs.carousel', this.handleSlide);
    this.carousel.on('slid.bs.carousel', this.handleSlid);
  }

  handleSlide(){
    this.setState(prevState => ({videoVisible: !prevState.videoVisible }) )
    console.log(`Slide, video ${this.state.videoVisible? 'visible': 'hidden'}`);
  }

  handleSlid(){
    console.log(`Slid, video ${this.state.videoVisible? 'visible': 'hidden'}`);
  }
  togglePlay() {
    const video = this.video;
    video[video.paused ? 'play' : 'pause']();
    this.carousel.carousel(video.paused ? 'cycle' : 'pause');
    console.log(this.carousel);
  }

  render() {
    return (
      <div id={this.carouselID} height="350rem" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target={`#${this.carouselID}`} data-slide-to="0" className="active" />
          <li data-target={`#${this.carouselID}`} data-slide-to="1" />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active headshot-background" >
            <div className="carousel-caption d-none d-md-block darkened-background">
              <h3> Will de Renzy-Martin </h3>
              <p>
                Graduating Actor, Spotlight Pin: <a className="card-link" href="https://www.spotlight.com/interactive/cv/3811-6724-2735"> 3811-6274-2735 </a>
              </p>
            </div>
          </div>
          <div className="carousel-item" >
            <Video src={showreel} />
          </div>
        </div>
        <a
          className="carousel-control-prev" href={`#${this.carouselID}`}
          role="button" data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next" href={`#${this.carouselID}`}
          role="button" data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}


export default HeadshotCarousel;
